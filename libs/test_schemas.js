/**
 * Created by Дмитрий on 12.12.2016.
 */
var dbHelper = require('./dbHelper');
var schemas = require('./schemas');


var source = new schemas.Source({
    source_url : "www.http" + Math.random() * 10,

    source_type : "source_type"
});

extras = { extra1 : 'extra1', extra2 : 'extra2'};

source.attachExtras(extras);

source.save(function(err) {
    if (err) throw err;
});

var item = new schemas.Item({
    source_url : "www.http" + Math.random() * 10,

    item_type : "source_type"
});

