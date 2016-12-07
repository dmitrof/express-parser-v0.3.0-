/**
 * Created by Дмитрий on 22.11.2016.
 */

dbHelper = require('./dbHelper');
db = dbHelper.db;
docProvider = dbHelper.docProvider;
db.collection('quotes');

module.exports.setDB = function(_db) {
    this.db = _db;
};

module.exports.parserRouter = {
    source_types : require('./source_types'),
    //adding source to database. URL validation required
    addSource : function(source, source_type, callback) {
        validateParser(source_type, function(err, result) {

        });
    },
    //validate URL here
    validateParser : function(parserInfo, callback) {

    },
    //parse start parsing source contents. Delegates logic to specific parser
    parseSource : function(source, callback) {

    }


};
