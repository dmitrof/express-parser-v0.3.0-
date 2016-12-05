/**
 * Created by Дмитрий on 20.11.2016.
 */
const MongoClient = require('mongodb').MongoClient;




var dbCallback = function(err, ok) {
    if (err) {
        console.log(err);
    }
    if (ok) {
        console.log(ok);
    }

};

module.exports.initDB = function(callback) {
    MongoClient.connect("mongodb://localhost:27017/exampleDb", function (err, database) {
        if (!err) {
            console.log("We are cconnected");
            module.exports.db = database;
            callback(null)
        }
        else {
            callback(err);
        }
    });
};


//Test quotes provider
QuotesProvider = {
    addQuote : function(quote) {
        //db.createCollection('quotes', {w:1}, function(err, collection) {});
        var collection = db.collection('quotes');
        collection.insert(quote, function(err, ok) {
            if (err) {
                console.log(err);
                return "failed to save";
            }
            else {
                console.log('saved to db');
                return "saved to db";
            }
        });
    },
    getAllQuotes : function(callback) {
        var collection = db.collection('quotes');
        collection.find(function(err, ok) {
            if (err) {
                console.log(err);
                callback(err)
            }
            else {
                console.log(ok);
                quotes = ok;
                callback(null, quotes);
            }
        });
    }
};






module.exports.quotesProvider = QuotesProvider;