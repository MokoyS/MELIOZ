// Script pour générer les favicons à partir du SVG
// Nécessite: npm install sharp (ou utiliser un outil en ligne)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'images', 'SVG', 'icon-logo.svg');

console.log('📝 Guide pour générer les favicons:');
console.log('');
console.log('Option 1 - Outil en ligne (RECOMMANDÉ):');
console.log('1. Allez sur https://realfavicongenerator.net/');
console.log(`2. Uploadez: ${svgPath}`);
console.log('3. Téléchargez le package et placez les fichiers dans public/');
console.log('');
console.log('Option 2 - ImageMagick (si installé):');
console.log(`convert ${svgPath} -resize 32x32 ${publicDir}/favicon-32x32.png`);
console.log(`convert ${svgPath} -resize 16x16 ${publicDir}/favicon-16x16.png`);
console.log(`convert ${svgPath} -resize 180x180 ${publicDir}/apple-touch-icon.png`);
console.log('');
console.log('Fichiers nécessaires dans public/:');
console.log('  - favicon.ico (à la racine)');
console.log('  - favicon-16x16.png');
console.log('  - favicon-32x32.png');
console.log('  - apple-touch-icon.png');
console.log('');

// Vérifier si les fichiers existent
const requiredFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png'
];

let missingFiles = [];
requiredFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.log('⚠️  Fichiers manquants:');
  missingFiles.forEach(file => console.log(`   - ${file}`));
  console.log('');
  console.log('Générez ces fichiers avant de déployer.');
} else {
  console.log('✅ Tous les fichiers favicon sont présents!');
}
