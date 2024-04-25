#!/bin/bash
# This script sends a GET request to a URL with a custom header and displays the body of the response

# Set the URL
url="$1"

# Set the header variable
header="X-School-User-Id: 98"

# Send the GET request with the custom header and display the body of the response
curl -s -H "$header" "$url"
