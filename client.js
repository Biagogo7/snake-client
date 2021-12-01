const net = require("net");

const IP = require('./constants');
const PORT = require('./constants');


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

    //client writing to server after establishing connection.
  conn.on('connect', () => {
  conn.write("Name: ADE");
  });

  //client writing to server after establishing connection.
  conn.on('connect', () => {
  conn.write("Say: Hello");
  });

  //   //client sending move up command to server to direct the snake.
  // conn.on('connect', () => {
  // conn.write("Move: up");
  // }); 


  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handles the incoming data from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // prints a "Successfully connected to the server" message when connection is established.
  conn.on('connect', () => {
    console.log('Successfully connected to the server');
  });

  return conn;
};

// console.log("Connecting ...");
// connect();



module.exports = connect;