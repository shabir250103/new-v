import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    
    // We want to turn white/light grey pixels to transparent,
    // and all darker pixels to pure white.
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      // If the pixel is very light (close to white)
      if (r > 230 && g > 230 && b > 230) {
        // Make it transparent
        this.bitmap.data[idx + 3] = 0; 
      } else {
        // Make it pure white
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
        
        // Anti-aliasing preservation:
        // Use the original darkness to set the alpha channel so the edges stay smooth
        const darkness = 255 - ((r + g + b) / 3);
        // Map darkness (0-255) to alpha (0-255). A darker original pixel means more solid white.
        this.bitmap.data[idx + 3] = darkness > 20 ? 255 : darkness * 10;
      }
    });

    await image.write('public/images/logo-white.png');
    console.log('Logo processed successfully!');
  } catch (err) {
    console.error(err);
  }
}

processImage();
