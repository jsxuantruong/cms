const mysql = require("mysql2");
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cms_project",
});
let db = pool.promise();
module.exports.db = db;
