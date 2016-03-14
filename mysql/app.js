var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zappclick'
});
 
connection.connect();
 
connection.query('select * from clicker_student', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The result is: ', rows[0].name);
});
 
connection.end();