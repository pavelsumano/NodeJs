
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.1.72",
  user: "root",
  password: "Pepelepu",
  port: "3306"
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});