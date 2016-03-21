var fs = require('fs')

var callback = function (err, data) {
	if (err) throw err;
  	console.log(data.toString().split("\n").length)
}

fs.readFile(process.argv[2], callback)