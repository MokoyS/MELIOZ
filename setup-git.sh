#!/bin/bash

# Script pour initialiser Git et configurer le remote

echo "🔧 Configuration Git pour le déploiement..."

# Initialiser git si ce n'est pas déjà fait
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du repo Git..."
    git init
fi

# Configurer le remote
echo "🔗 Configuration du remote GitHub..."
git remote remove origin 2>/dev/null
git remote add origin git@github.com:MokoyS/MELIOZ.git

echo "✅ Configuration terminée !"
echo ""
echo "📝 Commandes pour déployer :"
echo "   1. npm run build"
echo "   2. cd dist"
echo "   3. git init (si pas déjà fait)"
echo "   4. git add ."
echo "   5. git commit -m 'Deploy'"
echo "   6. git remote add origin git@github.com:MokoyS/MELIOZ.git (si pas déjà fait)"
echo "   7. git push -u origin main (ou master)"
echo ""
