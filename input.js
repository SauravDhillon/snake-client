const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
//it checks for the Ctrl + C key combination and terminates the process if it's detected
const handleUserInput = function(key){
  if(key === "\u0003"){
    process.exit();
  }
};

module.exports = setupInput;