$(document).ready(function() {
   
    var source = $("#nowplaying").html();
    var template = Handlebars.compile(source);
    
    var context = [
        {
        title: "Splatoon",
        platform: "Wii U",
        progress: "70%",
        quote: "Can't tell if I am a squid or a kid?",
        boxart: "http://img.photobucket.com/albums/v477/Tshroom/BoxArt/splatoon_us_box_art.jpg",
        devsite: "http://"
        },
        {
        title: "Heroes of the Storm",
        platform: "PC",
        progress: "10%",
        quote: "Putting in work on some daily quests. I need all the Diablo characters!",
        boxart: "http://img.photobucket.com/albums/v477/Tshroom/BoxArt/heroes-of-the-storm-starter-pack-pc_10.jpg",
        devsite: "http://"
        },
        {
        title: "Shovel Knight: Plague of Shadows",
        platform: "3DS",
        progress: "5%",
        quote: "My favorite 2D action platformer of all time is back with more content.",
        boxart: "http://img.photobucket.com/albums/v477/Tshroom/BoxArt/Shovel_knight_cover.jpg",
        devsite: "http://"
        },
    ];
    
   var html =  template(context);
    $('.htmlcont').html(html);
    
});