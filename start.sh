#!/bin/bash

echo "Starting Zeal-IT Backend Server..."
echo

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "WARNING: .env file not found!"
    echo "Please copy env.example to .env and configure your email settings."
    echo
    read -p "Press Enter to continue..."
    exit 1
fi

echo "Starting server..."
npm start
