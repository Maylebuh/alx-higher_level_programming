#!/usr/bin/node
// Write a script that prints all characters of a Star Wars movie:

const request = require('request');
const args = require('process').argv;
const url = `https://swapi-api.hbtn.io/api/films/${args[2]}`;
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    for (let i = 0; i < characters.length; i++) {
      request.get(characters[i], (error, response, body) => {
        if (error) {
          console.log(error);
        } else {
          const names = JSON.parse(body).name;
          console.log(names);
        }
      });
    }
  }
});
