const net = require("net");

const connect = require('./client')

const setupInput = require('./input')


// function call from client.js
console.log("Connecting ...");
connect();

// function call input.js
setupInput();



