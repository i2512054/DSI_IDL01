const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "192.168.5.74",
  user: "usr_desarrollo",
  password: "usr_desarrollo",
  database: "db_dsi",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

/*const pool = mysql.createPool({
  host: "mysql-natureza.alwaysdata.net",
  user: "natureza_equipo8",
  password: "@1364750@",
  database: "natureza_db8",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});*/

module.exports = pool;