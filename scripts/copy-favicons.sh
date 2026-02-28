#!/bin/bash

# Script pour copier les favicons depuis le dossier Downloads vers public/

SOURCE_DIR="/Users/maximelebas/Downloads/Favicon Generator"
TARGET_DIR="/Users/maximelebas/Documents/MELIOZ/Melioz-site/agency-site/public"

echo "📦 Copie des favicons..."

# Copier tous les fichiers favicon
cp "$SOURCE_DIR/favicon.ico" "$TARGET_DIR/"
cp "$SOURCE_DIR/favicon.svg" "$TARGET_DIR/"
cp "$SOURCE_DIR/favicon-96x96.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/apple-touch-icon.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/web-app-manifest-192x192.png" "$TARGET_DIR/"
cp "$SOURCE_DIR/web-app-manifest-512x512.png" "$TARGET_DIR/"

echo "✅ Favicons copiés dans public/"
echo ""
echo "📋 Fichiers copiés :"
ls -la "$TARGET_DIR" | grep -E "(favicon|apple|web-app)"
