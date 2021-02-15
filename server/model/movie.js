var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
    {
        "vod_id": {
            "type": "Number"
        },
        "vod_cid": {
            "type": "Number"
        },
        "vod_name": {
            "type": "String"
        },
        "vod_title": {
            "type": "String"
        },
        "vod_type": {
            "type": "String"
        },
        "vod_keywords": {
            "type": "String"
        },
        "vod_actor": {
            "type": "String"
        },
        "vod_director": {
            "type": "String"
        },
        "vod_content": {
            "type": "String"
        },
        "vod_pic": {
            "type": "String"
        },
        "vod_area": {
            "type": "String"
        },
        "vod_language": {
            "type": "String"
        },
        "vod_year": {
            "type": "Number"
        },
        "vod_addtime": {
            "type": "Date"
        },
        "vod_filmtime": {
            "type": "Number"
        },
        "vod_server": {
            "type": "String"
        },
        "vod_play": {
            "type": "String"
        },
        "vod_url": {
            "type": "String"
        },
        "vod_inputer": {
            "type": "Mixed"
        },
        "vod_reurl": {
            "type": "String"
        },
        "vod_length": {
            "type": "Number"
        },
        "vod_weekday": {
            "type": "Mixed"
        },
        "vod_copyright": {
            "type": "Number"
        },
        "vod_state": {
            "type": "String"
        },
        "vod_version": {
            "type": "String"
        },
        "vod_tv": {
            "type": "String"
        },
        "vod_total": {
            "type": "Number"
        },
        "vod_continu": {
            "type": "String"
        },
        "vod_status": {
            "type": "Number"
        },
        "vod_stars": {
            "type": "Number"
        },
        "vod_hits": {
            "type": "Mixed"
        },
        "vod_isend": {
            "type": "Number"
        },
        "vod_douban_id": {
            "type": "Number"
        },
        "vod_series": {
            "type": "String"
        },
        "list_name": {
            "type": "String"
        }
    },

);

//Export model
module.exports = mongoose.model('Movie', MovieSchema,'movies');