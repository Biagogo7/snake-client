const net = require("net");

const connect = require('./client')



// console.log("Connecting ...");
// connect();







/*
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handles the incoming data from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

*/
