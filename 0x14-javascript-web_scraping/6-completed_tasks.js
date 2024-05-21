#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id.
const request = require('request');
const args = require('process').argv;

request(args[2], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const contents = JSON.parse(body);
    const obj = {};
    contents.forEach((content) => {
      if (content.completed && obj[content.userId] === undefined) {
        obj[content.userId] = 1;
      } else if (content.completed) {
        obj[content.userId] += 1;
      }
    });
    console.log(obj);
  }
});
