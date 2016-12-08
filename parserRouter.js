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
    addSource : function(source_url, source_type, callback) {
        var sourceAddedPromises = [];
        var parser;
        p = new Promise(function(resolve, reject) {
            this.getParser(source_url, source_type, function(err, _parser) {
                if (err) {console.log(err); reject('source was not validated')}
                parser = _parser;
                resolve('source is validated')
            })
        });




    },
    //validate URL and source type here, get parser
    getParser : function(source_url, source_type, callback) {

    },
    //parse start parsing source contents. Delegates logic to specific parser
    parseSource : function(source, callback) {

    },
    insertSourceToDB : function(source_url, source_info, callback) {

    }


};
