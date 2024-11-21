const connect = require("./client");
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541,
//   });
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//     console.log("Connection is made successfully");
//   });
//   conn.on("data", (data) => {
//     console.log(data);
//   });

//   return conn;
// };
console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key){
  if(key === "\u0003"){
    process.exit();
  }
};

connect();
setupInput();