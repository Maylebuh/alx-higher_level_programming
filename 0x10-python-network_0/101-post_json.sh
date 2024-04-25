#!/bin/bash
# This script sends a JSON POST request to a URL and displays the body of the response

# Check if the file exists
if [ ! -f "$2" ]; then
    echo "File not found: $2"
    exit 1
fi

# Check if the file is a valid JSON
if ! jq . "$2" >/dev/null 2>&1; then
    echo "Not a valid JSON"
    exit 1
fi

# Send POST request with JSON file as the body
curl -sX POST -H "Content-Type: application/json" -d @"$2" "$1
