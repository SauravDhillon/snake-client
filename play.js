const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection is made successfully");
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};
console.log("Connecting ...");
connect();

