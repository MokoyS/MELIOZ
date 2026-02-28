// Script pour créer un package.json et tsconfig.json minimal dans dist/ pour les fonctions Vercel
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');

// Créer le dossier dist/ s'il n'existe pas
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Créer package.json
const distPackageJson = {
  name: 'melioz-site',
  version: '1.0.0',
  type: 'module',
  dependencies: {
    '@vercel/node': '^5.5.32'
  },
  devDependencies: {
    '@types/node': '^20.11.0',
    'typescript': '^5.5.3'
  }
};

const packageJsonPath = path.join(distPath, 'package.json');
fs.writeFileSync(packageJsonPath, JSON.stringify(distPackageJson, null, 2));
console.log('✅ package.json créé dans dist/');

// Créer tsconfig.json
const distTsConfig = {
  compilerOptions: {
    target: 'ES2022',
    module: 'ESNext',
    moduleResolution: 'bundler',
    lib: ['ES2022'],
    types: ['@vercel/node', 'node'],
    esModuleInterop: true,
    skipLibCheck: true,
    strict: true,
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true
  },
  include: ['api/**/*'],
  exclude: ['node_modules']
};

const tsConfigPath = path.join(distPath, 'tsconfig.json');
fs.writeFileSync(tsConfigPath, JSON.stringify(distTsConfig, null, 2));
console.log('✅ tsconfig.json créé dans dist/');
