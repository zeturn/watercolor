#!/bin/bash
set -e

echo "📦 Initializing NPM Packages..."

# Check if logged in
if ! npm whoami &> /dev/null; then
  echo "❌ You are not logged in to NPM."
  echo "👉 Please run 'npm login' first."
  exit 1
fi

echo "🚀 Building all packages..."
npm run build

echo "📤 Publishing packages to create them on NPM..."
# --workspaces: Publishes all workspaces defined in root package.json
# --access public: Ensures they are public (required for scoped @org/pkg free tier)
npm publish --workspaces --access public

echo "✅ Packages created successfully!"
