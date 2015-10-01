$(document).ready( function() {
   $.getJSON("http://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/", function(data) {
      $.each(data.oembed, function () {
        $(".instul").append("<li>"+this['thumbnail_url']+"</li>");
      }); 
   });
});