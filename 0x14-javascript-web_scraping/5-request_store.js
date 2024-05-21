#!/usr/bin/node
// Write a script that gets the contents of a webpage and stores it in a file.
const args = require('process').argv;
const fs = require('fs');
const request = require('request');
request(args[2]).pipe(fs.createWriteStream(args[3], 'utf-8'));
