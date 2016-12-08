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
    sources_types : require('./source_types'),
    sources_urls : require('./source_url'),

    //adding source to database. URL validation required
    addSource : function(source_url, source_type, callback) {
        var promises = [];
        var parser;
        p = new Promise(function(resolve, reject) {
            this.getParser(source_url, source_type, function(err, _parser) {
                if (err) {
                    console.log(err);
                    reject('source was not validated')
                }
                parser = _parser;
                resolve('source is validated')
            })
        });
        p.then(function(){}, function(reason){
            callback(reason);
        });
        promises.push(p);
        Promise.all(promises).then(function() {
            callback(null, 'Source is added!');
        })





    },
    //validate URL and source type here, get parser
    getParser : function(source_url, source_type, callback) {
        var parser;
        if (source_type != null) {  //get parser from source_type
            parserType = this.sources_types[source_type];
            callback(null, parser);
            var urls_list = this.sources_urls[parserType];
            //доделать ДОМЕН
            if (urls_list.indexOf(source_url) != -1) {
                parser = parserType;
                callback(null, parser);
            }
            else {callback('source URL is not valid')}


        }
    },
    //parse start parsing source's contents. Delegates logic to specific parser (for exmple jishoParser)
    parseSource : function(source, callback) {

    },
    insertSourceToDB : function(source_url, source_info, callback) {

    },
    validateUrl : function(source_url,callback) {

    },
    getUrlDomain : function(source_url, callback) {

    }


};
