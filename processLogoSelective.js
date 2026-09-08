import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const isGray = Math.abs(r - g) < 25 && Math.abs(g - b) < 25 && Math.abs(r - b) < 25;
      
      // If the pixel is very light (close to white)
      if (r > 230 && g > 230 && b > 230 && isGray) {
        // Make it transparent
        this.bitmap.data[idx + 3] = 0; 
      } 
      // If it's a darker gray/black pixel (e.g., "tours and travels" text)
      else if (isGray) {
        const darkness = 255 - ((r + g + b) / 3);
        // Make it pure white
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
        
        // Anti-aliasing against transparent:
        // Set alpha based on how dark the original pixel was
        this.bitmap.data[idx + 3] = darkness;
      }
      // Else it's a colored pixel (like the NewV part), we keep it as is!
      // Optional: to avoid white fringe on colored pixels, you could adjust them,
      // but keeping it simple first.
    });

    await image.write('public/images/logo-custom.png');
    console.log('Selective logo processing completed!');
  } catch (err) {
    console.error(err);
  }
}

processImage();
