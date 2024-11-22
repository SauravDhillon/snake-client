let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
//it checks for the Ctrl + C key combination and terminates the process if it's detected
const handleUserInput = function(key){
  if(key === "\u0003"){
    console.log("Game ended");
    process.exit();
  }
    if(key === "w" || key === "W"){
      connection.write("Move: up");
    }else if(key === "a" || key === "A"){
      connection.write("Move: left");
    }else if(key === "s" || key === "S"){
      connection.write("Move: down");
    }else if(key === "d" || key === "D"){
      connection.write("Move: right");
    }
    if(key === "1"){
      connection.write("Say: Howdy");
    }
    if(key === "2"){
      connection.write("Say: Good Game");
    }
  
};

module.exports = setupInput;