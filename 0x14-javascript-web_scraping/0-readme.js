#!/usr/bin/node
// reads a file in utf-8 format
const fs = require('fs');
const process = require('process');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  console.log(err || data);
});
