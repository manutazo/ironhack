function decoder(twords){
	var index = 0;
	var secretMessage = '';
	for(var i = 0; i < twords.length; i++){
		secretMessage += twords[i].charAt(index);
		debugger;
		index = (index + 1) % 5;
	}
	return secretMessage;
}
var words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];

menssage = decoder(words);
console.log(menssage);
