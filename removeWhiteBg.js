import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If the pixel is very light (close to white)
      if (r > 230 && g > 230 && b > 230) {
        // Make it transparent
        this.bitmap.data[idx + 3] = 0; 
      }
    });

    await image.write('public/images/logo-transparent.png');
    console.log('Logo background removed successfully!');
  } catch (err) {
    console.error(err);
  }
}

processImage();
