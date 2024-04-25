#!/bin/bash
# This script sends a DELETE request to the URL passed as the first argument and displays the body of the response

# Set the URL
url="$1"

# Send the DELETE request and display the body of the response
curl -s -X DELETE "$url"
