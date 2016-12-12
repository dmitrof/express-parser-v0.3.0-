/**
 * Created by Дмитрий on 12.12.2016.
 * здесь будут все схемы. Необходимо переделать dbHelper (или обойтись без него)
 */
var mongoose = require('mongoose');
var mongoose_attachments = require('mongoose-attachments-aws2js');
var Schema = mongoose.Schema;

//source Schema - модель источника данных
var sourceSchema = new Schema({
    source_url : { type: String, required: true, unique: true },
    source_type : {type: String, required: true},
    source_description : String,
    parser_available : Boolean,
    owner : String,
    created_at : Date,
    updated_at : Date,
    extras : {}
});


//метод для добавления дополнительных полей
sourceSchema.methods.attachExtras = function(_extras) {
    // add some stuff to the users name
    this.extras = _extras;

    return this.name;
};



//item schema - модель единицы учебного контента
var itemSchema = new Schema({
    item_id : { type: String, unique: true, required: true }, //id генерируется парсером на основе uri айтема или его содержимого
    source_url : { type: String, required: true },    //ссылается на source_url SourceSchema
    item_type : {type: String, required: true},
    item_description : String,
    created_at : Date,
    updated_at : Date,
    extras : {}, //в этом поле может храниться дополнительная инфа
    body : {} //в этом поле (если не в аттачменте) может храниться сам контент
});
//метод для добавления дополнительных полей. Будет вызываться после парсинга
itemSchema.methods.attachExtras = function(_extras) {
    // add some stuff to the users name
    this.extras = _extras;

    return this.extras;
};

itemSchema.methods.attachBody = function(_body) {
    // add some stuff to the users name
    this.extras = _body;

    return this.body;
};



var Source = mongoose.model('Source', sourceSchema);

var Item = mongoose.model('Item', sourceSchema);

// make this available to our users in our Node applications
module.exports.Source = Source;
module.exports.Item = Item;