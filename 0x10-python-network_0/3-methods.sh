#!/bin/bash
# This script takes a URL and displays all HTTP methods the server will accept

# Set the URL
url="$1"

# Send a HEAD request and retrieve the allowed HTTP methods from the response headers
allowed_methods=$(curl -sI "$url" | grep "Allow:" | cut -d ' ' -f2-)

# Display the allowed HTTP methods
echo "$allowed_methods"
