const mongoose = require('mongoose');
mongoose.set('debug', true);
const db = mongoose.connect(require('../config').database);

var schema = mongoose.Schema({
    rid:{
        type: Number,
        required:true
    },
    requestPool:[
        {
            request:{
                nickname:{
                  type:String,
                  required:true
                },
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
            }
        }
    ],
    date: {
        type:Number
    }
});
var Status = db.model('status', schema,'status');

module.exports = Status;