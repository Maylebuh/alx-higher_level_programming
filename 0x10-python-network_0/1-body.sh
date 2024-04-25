#!/bin/bash
# This script takes a URL, sends a GET request, and displays the body of the response for a 200 status code

curl -sL -w "%{http_code}" -o /dev/null "$1" | {
    read -r status
    if [ "$status" = "200" ]; then
        curl -sL "$1"
    fi
}
