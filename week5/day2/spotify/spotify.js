w$(document).ready(function(){

  var botom = $('.container').show();
  var ENDPOINT_1 = 'https://api.spotify.com/v1/search?type=artist&query=';
  var ENDPOINT_2 = 'https://api.spotify.com/v1/search?type=album&query=';

  $('.search').on('submit', function(event){
    event.preventDefault();
    var artist = $('.search-artist').val();
    $.ajax({
      url: ENDPOINT_1 + artist,
        success: function(response) {
         response.artists.items.forEach(function(item){
           if(item.images.length > 0) {
             console.log(item.id)
             $('.artists-list').append("<li><a href='#' data-artist='" + item.id + "'class='artist-search'>" + item.name + "</a></li>");
             $('.artists-list').append("<img src=" + item.images[0].url + ">");
          };
      })},
      dataType: 'json'
    });

  });

  $('.artists-list').delegate('.artist-search', 'click', function(event){
    event.preventDefault();
    $('.artists-list').data('.this.date.artist', function(album){
      $.ajax({
        url: ENDPOINT_2 + artist,
        success: function(album) {
           album.artists.items.forEach(function(item){
             console.log(item.images);
           })},
      });
    });
  });
});
