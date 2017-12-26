const mongoose = require('mongoose');
const db = mongoose.connect(require('../config').database);

var schema = mongoose.Schema({
    nickname:{
      type:String,
      required:true,
      index:{
          unique:true
      }
    },
    requestURI:{
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    enable: {
        type:Boolean,
        default:true,
        required:false
    }
});

var pingPool = db.model('pingPool', schema);

module.exports = pingPool ;