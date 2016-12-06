/**
 * Created by Дмитрий on 23.11.2016.
 */
//api key is AIzaSyA1faslXR56EAbtZz9LFHsUtZeYXr4SOTw

var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyA1faslXR56EAbtZz9LFHsUtZeYXr4SOTw');
//db connection must be initialized at this step
dbHelper = require('./dbHelper');
db = dbHelper.db;
docProvider = dbHelper.docProvider;
db.collection('quotes');

module.exports.setDB = function(_db) {
    this.db = _db;
};


youTube.search('Piano polyrythms', 2, function(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        //console.log(JSON.stringify(result, null, 2));
    }
});

youTube.getById('HcwTxRuq-uk', function(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        //console.log(JSON.stringify(result, null, 2));
    }
});

module.exports.yParser = {
    addVideoById : function(id, callback) {
        youTube.getById(id, function(error, result) {
            if (error) {
                console.log(error);
                tr_state = 'video NOT added!';
                callback(error, tr_state);
            }
            else {
                console.log(JSON.stringify(result, null, 2));
                docProvider.addDoc(result, 'testdocs', function(err, ok) {
                    if (err) {console.log(err)}
                    console.log(ok);
                });
                tr_state = 'video added!';
                callback(null, result);
            }
        });
    },

    setDB : function(_db) {
        this.db = _db;
    }


}
