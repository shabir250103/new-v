import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(process.cwd(), 'public/images');
const pagesFile = path.join(process.cwd(), 'src/pages.jsx');

let pagesContent = fs.readFileSync(pagesFile, 'utf8');
const files = fs.readdirSync(imgDir);

files.forEach(file => {
  if (file.endsWith('.jpg')) {
    // Sanitize filename: lowercase, replace spaces/underscores with hyphens
    let newName = file.toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/_+/g, '')
                      .replace(/-+/g, '-')
                      .replace('-.jpg', '.jpg');
    
    // Rename file
    fs.renameSync(path.join(imgDir, file), path.join(imgDir, newName));
    
    // Replace in pagesContent
    // Escape regex characters in original filename
    const regexSafeFile = file.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(`/images/${regexSafeFile}`, 'g');
    pagesContent = pagesContent.replace(regex, `/images/${newName}`);
  }
});

fs.writeFileSync(pagesFile, pagesContent);
console.log('Sanitized images and updated pages.jsx');
