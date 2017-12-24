const mongoose = require('mongoose');
const db = mongoose.connect(require('../config').database);

var schema = mongoose.Schema({
    rid:{
        type: Number,
        required:true
    },
    request:{
        uri:{
            type:String,
            required: true
        },
        ua:{
            type:String,
            required: true
        },
        method:{
            type:String,
            default: "GET",
            required: false
        }
    },
    response:{
        statusCode: {
            type: Number,
            required:true
        },
        responseTime:{
            type:Number,
            required:true
        }
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
var Status = db.model('status', schema);

module.exports = Status;