#!/bin/bash

# Make the script exit if any command fails
set -e

# Change to the project directory
cd "$(dirname "$0")"

# Clean build directories first 
echo "🧹 Cleaning build directories..."
cd packages/ui && npm run clean
cd ../dashboard && npm run clean
cd ../core && npm run clean
cd ../..
echo "✅ Build directories prepared!"

# Build packages in the correct order
echo "🚀 Building packages..."
echo "🎨 Building UI package"
cd packages/ui && npm run build
echo "✅ UI package built successfully!"

echo "🖥️ Building Dashboard package"
cd ../dashboard && npm run build
echo "✅ Dashboard package built successfully!"

echo "📦 Building Core package"
cd ../core && npm run build
echo "✅ Core package built successfully!"

echo "🌐 Building Test app"
cd ../test-app && npm run build
echo "✅ Test app built successfully!"

cd ../..
echo "🎉 All packages built successfully!"