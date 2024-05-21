#!/usr/bin/node
// Write a script that display the status code of a GET request.
const process = require('process');
const request = require('request');

const requestUrl = process.argv[2];

request(requestUrl, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
