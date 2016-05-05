var botom = $('.container').show();

var phrases = [
  'esto es la primera frase',
  'esto es la segunda frase random',
  'esta es la tercera frase y la 3'
];
var ramdom = Math.floor(Math.random() * phrases.length);


$('.ramdom').on('click', function(){
  $('.container').empty();
	$('.container').append(phrases[Math.floor(Math.random() * phrases.length)]);
});

$('.add-phrase').on('keypress', function(e){
  if (e.which == 13){
    e.preventDefault();
    var a = $('.add-frase').val();
    phrases.push(a);
    console.log(phrases);
  }
});

$(document).on('ready', function(x){

  phrases.forEach(x);
    $('ul').append('<li>' + item + '</li>');
  });

// })


// }
// $('.ul').forEach('show', function(x){
//     $('.ul').append(x);
// });
