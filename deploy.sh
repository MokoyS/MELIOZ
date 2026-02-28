#!/bin/bash

# Script de déploiement pour Vercel
# Ce script build le projet et prépare le dossier dist/ pour le déploiement

echo "🔨 Building project..."
npm run build

echo "✅ Build terminé !"
echo ""
echo "📦 Le dossier dist/ contient maintenant :"
echo "   - Les fichiers statiques du site"
echo "   - Le dossier api/ avec les fonctions Vercel"
echo "   - Le fichier vercel.json"
echo ""
echo "🚀 Vous pouvez maintenant :"
echo "   1. Aller sur https://github.com/MokoyS/MELIOZ"
echo "   2. Drag & drop le dossier dist/ dans le repo"
echo "   3. Ou utiliser: git add dist/ && git commit && git push"
echo ""
