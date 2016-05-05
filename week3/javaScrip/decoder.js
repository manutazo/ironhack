var words, message;
words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];


function decoder(words){
	var index = 0;
	var secretMessage = '';

	words.forEach(function(item){
		secretMessage += item[index]
		index++;
		if (index % 5 === 0) {
			index = 0;
		}

	});
	return secretMessage;
}

message = decoder(words);
console.log(message);