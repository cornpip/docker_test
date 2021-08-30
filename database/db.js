let mysql = require('mysql2');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'auguststart08!',
  database: 'together'
});

module.exports=db;
//localhost