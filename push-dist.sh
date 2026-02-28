#!/bin/bash

# Script pour build et push le dossier dist/ sur GitHub

echo "🔨 Building project..."
npm run build

# Vérifier que api/ est bien dans dist/
if [ ! -d "dist/api" ]; then
    echo "❌ Erreur: Le dossier api/ n'est pas dans dist/"
    echo "   Vérifiez que le build s'est bien passé"
    exit 1
fi

echo "✅ Build terminé !"
echo ""
echo "📦 Contenu de dist/ :"
ls -la dist/ | head -20
echo ""
echo "🚀 Pour push sur GitHub :"
echo ""
echo "   Option 1 - Drag & Drop :"
echo "   1. Ouvrez https://github.com/MokoyS/MELIOZ"
echo "   2. Drag & drop le dossier dist/ complet"
echo "   3. Commit les changements"
echo ""
echo "   Option 2 - Git (dans le dossier dist/) :"
echo "   cd dist"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Deploy'"
echo "   git remote add origin git@github.com:MokoyS/MELIOZ.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
