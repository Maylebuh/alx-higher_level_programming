#!/usr/bin/node
// Write a script that prints all characters of a Star Wars movie:

const request = require('request');
const args = require('process').argv;
const url = `https://swapi-api.hbtn.io/api/films/${args[2]}`;

request.get(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const character = JSON.parse(body).characters;
    printCharacters(character, 0);
  }
});

function printCharacters (characters, index) {
  request(characters[index], function (err, response, body) {
    if (!err) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}
