#!/bin/bash
# This script sends a POST request to a URL with specified parameters and displays the body of the response

# Set the URL
url="$1"

# Set the POST parameters
email="test@gmail.com"
subject="I will always be here for PLD"

# Send the POST request and display the body of the response
curl -s -X POST -d "email=$email" -d "subject=$subject" "$url"
