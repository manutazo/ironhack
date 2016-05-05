var fs = require('fs');

function print (error, content) {
	if ('error') {
		console.log("oh no, error", error);
	} else {
		console.log("success", content);
		}
	}
}

fs.readFile('file.txt', 'uft8' print);