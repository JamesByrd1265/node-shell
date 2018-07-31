const fs = require('fs');
module.exports = cat;

function cat(fileName) {
	fs.readFile(fileName, 'utf8', function (err,data) {
		if (err) {
		  return process.stdout.write(err);
		}
		process.stdout.write(data);
    	process.stdout.write('prompt > ');
	})
}


