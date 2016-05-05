var sentence = "fill the proper thank for the cow";
sentence = sentence.split(" ").reverse();
var index = 0;
for (var i = 0; i % 2 === 0; i < sentence.length; i++){
		var secretMessage = "";
		secretMessage += sentence[i].charAt(index);
		index = (index + 1) % 5;
		console.log(secretMessage);
	}

