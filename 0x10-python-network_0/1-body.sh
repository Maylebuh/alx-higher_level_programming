#!/bin/bash
# This script takes a URL, sends a GET request, and displays the body of the response for a 200 status code

response=$(curl -sL -w "%{http_code}" -o /dev/null "$1")
status_code=$(echo "$response" | tail -n1)

if [ "$status_code" -eq 200 ]; then
    curl -sL "$1"
fi
