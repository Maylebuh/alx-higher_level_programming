#!/bin/bash
# This script sends a request to a URL and displays only the status code of the response

# Send a GET request and extract only the status code
curl -s -o /dev/null -w "%{http_code}" "$1"
