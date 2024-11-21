const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: SSD");
  });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 300);
  // });
  //   conn.on("connect", () => {
  //     setInterval(() => {
  //       conn.write("Move: up");
  //     }, 5000);
  // });
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;