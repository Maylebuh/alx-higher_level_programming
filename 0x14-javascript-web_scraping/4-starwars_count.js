#!/usr/bin/node
// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const args = require('process').argv;

request(args[2], (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    let count = 0;
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      const characters = films[i].characters;
      for (let j = 0; j < characters.length; j++) {
        const character = characters[j].split('/');
        if (character[character.length - 2] === '18') {
          count++;
        }
      }
    }
    console.log(count);
  }
});
