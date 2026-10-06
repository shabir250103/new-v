import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const images = [
  ['tour_packages_header.png', 'tour-packages-header.webp', 1600],
  ['international_tours_santorini.png', 'international-tours-santorini.webp', 1600],
  ['about_bg.png', 'about-header.webp', 1600],
  ['reviews_bg.png', 'reviews-header.webp', 1600],
  ['sunset_beach.png', 'contact-header.webp', 1600],
  ['gallery-header-generated.png', 'gallery-header.webp', 1800],
  ['why-choose-us-family-sunset.png', 'why-choose-us-family-sunset.webp', 1800],
  ['domestic_tours.png', 'domestic-tours.webp', 720],
  ['group_tours.png', 'group-tours.webp', 720],
  ['hotel_bookings.png', 'hotel-bookings.webp', 720],
  ['transportation.png', 'transportation.webp', 720],
  ['sightseeing.png', 'sightseeing.webp', 720],
  ['flight_tickets.png', 'flight-tickets.webp', 720],
  ['visa_arrangements.png', 'visa-arrangements.webp', 720],
  ['category_international.png', 'category-international.webp', 900],
  ['category_wildlife.png', 'category-wildlife.webp', 900],
];

const imageRoot = new URL('../public/images/', import.meta.url);

for (const [sourceName, outputName, width] of images) {
  const source = new URL(sourceName, imageRoot);
  const output = new URL(outputName, imageRoot);
  await sharp(fileURLToPath(source))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(fileURLToPath(output));
  const [before, after] = await Promise.all([stat(source), stat(output)]);
  const saving = Math.round((1 - after.size / before.size) * 100);
  console.log(`${sourceName} -> ${outputName}: ${saving}% smaller`);
}
