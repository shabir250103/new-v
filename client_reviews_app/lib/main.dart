import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:postgres/postgres.dart';

void main() {
  runApp(const MyApp());
}

Future<Connection> _getDbConnection() async {
  return await Connection.open(
    Endpoint(
      host: 'db.xcgxoukscejpngmrnjjl.supabase.co',
      database: 'postgres',
      username: 'postgres',
      password: '9962475801sH',
      port: 5432,
    ),
    settings: const ConnectionSettings(sslMode: SslMode.require),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Client Reviews',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const ReviewsListScreen(),
    );
  }
}

class ReviewsListScreen extends StatefulWidget {
  const ReviewsListScreen({super.key});

  @override
  State<ReviewsListScreen> createState() => _ReviewsListScreenState();
}

class _ReviewsListScreenState extends State<ReviewsListScreen> {
  List<Map<String, dynamic>> _reviews = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchReviews();
  }

  Future<void> _fetchReviews() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final conn = await _getDbConnection();

      // Ensure table exists and add client_name column if missing
      await conn.execute('''
        CREATE TABLE IF NOT EXISTS client_reviews (
          id SERIAL PRIMARY KEY,
          client_name TEXT,
          text TEXT,
          rating REAL,
          image_base64 TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      ''');
      
      try {
        await conn.execute('ALTER TABLE client_reviews ADD COLUMN client_name TEXT;');
      } catch (e) {
        // Ignore error if column already exists
      }

      final result = await conn.execute('SELECT id, text, rating, image_base64, created_at, client_name FROM client_reviews ORDER BY id DESC');
      
      final List<Map<String, dynamic>> loadedReviews = [];
      for (final row in result) {
        loadedReviews.add({
          'id': row[0],
          'text': row[1],
          'rating': row[2],
          'image_base64': row[3],
          'created_at': row[4],
          'client_name': row[5],
        });
      }

      await conn.close();

      setState(() {
        _reviews = loadedReviews;
      });
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Error: \$e')));
      }
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  Future<void> _deleteReview(int id) async {
    try {
      final conn = await _getDbConnection();
      await conn.execute(
        Sql.named('DELETE FROM client_reviews WHERE id = @id'),
        parameters: {'id': id},
      );
      await conn.close();
      _fetchReviews();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Error deleting: \$e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Client Reviews'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _reviews.isEmpty
              ? const Center(child: Text('No reviews found.'))
              : ListView.builder(
                  itemCount: _reviews.length,
                  itemBuilder: (context, index) {
                    final review = _reviews[index];
                    final imageBytes = review['image_base64'] != null ? base64Decode(review['image_base64']) : null;

                    return Card(
                      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      child: ListTile(
                        leading: imageBytes != null
                            ? Image.memory(imageBytes, width: 50, height: 50, fit: BoxFit.cover)
                            : const Icon(Icons.image, size: 50),
                        title: Text(review['client_name'] != null ? "${review['client_name']} - ${review['text']}" : review['text']?.toString() ?? ''),
                        subtitle: Row(
                          children: [
                            Text(review['rating']?.toString() ?? ''),
                            const Icon(Icons.star, size: 16, color: Colors.amber),
                          ],
                        ),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              icon: const Icon(Icons.edit, color: Colors.blue),
                              onPressed: () async {
                                final result = await Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (_) => ReviewScreen(review: review),
                                  ),
                                );
                                if (result == true) {
                                  _fetchReviews();
                                }
                              },
                            ),
                            IconButton(
                              icon: const Icon(Icons.delete, color: Colors.red),
                              onPressed: () {
                                showDialog(
                                  context: context,
                                  builder: (context) => AlertDialog(
                                    title: const Text('Delete Review'),
                                    content: const Text('Are you sure you want to delete this review?'),
                                    actions: [
                                      TextButton(
                                        onPressed: () => Navigator.pop(context),
                                        child: const Text('Cancel'),
                                      ),
                                      TextButton(
                                        onPressed: () {
                                          Navigator.pop(context);
                                          _deleteReview(review['id']);
                                        },
                                        child: const Text('Delete', style: TextStyle(color: Colors.red)),
                                      ),
                                    ],
                                  ),
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final result = await Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => const ReviewScreen()),
          );
          if (result == true) {
            _fetchReviews();
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class ReviewScreen extends StatefulWidget {
  final Map<String, dynamic>? review;

  const ReviewScreen({super.key, this.review});

  @override
  State<ReviewScreen> createState() => _ReviewScreenState();
}

class _ReviewScreenState extends State<ReviewScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _textController = TextEditingController();
  double _rating = 0;
  File? _image;
  String? _existingImageBase64;
  final ImagePicker _picker = ImagePicker();
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    if (widget.review != null) {
      _nameController.text = widget.review!['client_name']?.toString() ?? '';
      _textController.text = widget.review!['text']?.toString() ?? '';
      _rating = (widget.review!['rating'] as num?)?.toDouble() ?? 0;
      _existingImageBase64 = widget.review!['image_base64'];
    }
  }

  Future<void> _pickImage() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
    if (image != null) {
      setState(() {
        _image = File(image.path);
      });
    }
  }

  Future<void> _saveReview() async {
    if (_textController.text.isEmpty || _rating == 0 || (_image == null && _existingImageBase64 == null)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please fill all fields (Image, Text, Rating)')),
      );
      return;
    }

    setState(() {
      _isLoading = true;
    });

    try {
      final conn = await _getDbConnection();
      
      String base64Image = _existingImageBase64 ?? '';
      if (_image != null) {
        final bytes = await _image!.readAsBytes();
        base64Image = base64Encode(bytes);
      }

      if (widget.review == null) {
        // Insert
        await conn.execute(
          Sql.named('INSERT INTO client_reviews (client_name, text, rating, image_base64) VALUES (@client_name, @text, @rating, @image_base64)'),
          parameters: {
            'client_name': _nameController.text,
            'text': _textController.text,
            'rating': _rating,
            'image_base64': base64Image,
          },
        );
      } else {
        // Update
        await conn.execute(
          Sql.named('UPDATE client_reviews SET client_name = @client_name, text = @text, rating = @rating, image_base64 = @image_base64 WHERE id = @id'),
          parameters: {
            'client_name': _nameController.text,
            'text': _textController.text,
            'rating': _rating,
            'image_base64': base64Image,
            'id': widget.review!['id'],
          },
        );
      }

      await conn.close();

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(widget.review == null ? 'Review saved successfully!' : 'Review updated successfully!')),
        );
        Navigator.pop(context, true);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: \$e')),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.review == null ? 'Add Client Review' : 'Edit Client Review'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            GestureDetector(
              onTap: _pickImage,
              child: Container(
                height: 200,
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.grey[400]!),
                ),
                child: _image != null
                    ? ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: Image.file(_image!, fit: BoxFit.cover),
                      )
                    : _existingImageBase64 != null
                        ? ClipRRect(
                            borderRadius: BorderRadius.circular(12),
                            child: Image.memory(base64Decode(_existingImageBase64!), fit: BoxFit.cover),
                          )
                        : Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Icon(Icons.add_a_photo, size: 50, color: Colors.grey),
                              SizedBox(height: 8),
                              Text('Tap to add an image', style: TextStyle(color: Colors.grey)),
                            ],
                          ),
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _nameController,
              decoration: const InputDecoration(
                labelText: 'Client Name',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _textController,
              maxLines: 4,
              decoration: const InputDecoration(
                labelText: 'Review Text',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),
            const Text('Rating:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            RatingBar.builder(
              initialRating: _rating,
              minRating: 1,
              direction: Axis.horizontal,
              allowHalfRating: true,
              itemCount: 5,
              itemPadding: const EdgeInsets.symmetric(horizontal: 4.0),
              itemBuilder: (context, _) => const Icon(
                Icons.star,
                color: Colors.amber,
              ),
              onRatingUpdate: (rating) {
                setState(() {
                  _rating = rating;
                });
              },
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              onPressed: _isLoading ? null : _saveReview,
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(vertical: 16),
              ),
              child: _isLoading
                  ? const CircularProgressIndicator()
                  : Text(widget.review == null ? 'Save Review' : 'Update Review', style: const TextStyle(fontSize: 18)),
            ),
          ],
        ),
      ),
    );
  }
}
