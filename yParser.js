/**
 * Created by Дмитрий on 23.11.2016.
 */
//api key is AIzaSyA1faslXR56EAbtZz9LFHsUtZeYXr4SOTw

var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

youTube.search('World War z Trailer', 2, function(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(result, null, 2));
    }
});