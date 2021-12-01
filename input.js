

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
     connection.write("Move: up");
     //console.log("Move: Up")
  }
  if (key === 'a') {
    connection.write("Move: left");
    //console.log("Move: Up")
  }
  if (key === 's') {
    connection.write("Move: down");
    //console.log("Move: Up")
  }
  if (key === 'd') {
    connection.write("Move: right");
    //console.log("Move: Up")
  }

};


setupInput()

module.exports = setupInput;