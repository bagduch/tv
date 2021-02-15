var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListSchema = new Schema(
    {
        "list_id": {
            "type": "number"
        },
        "list_name": {
            "type": "String"
        }
    })

//Export model
module.exports = mongoose.model('List', ListSchema,'list');