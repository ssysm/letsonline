const mongoose = require('mongoose');
const db = mongoose.connect(require('../config').database);

var schema = mongoose.Schema({
      counter:{
          type:Number,
          required:true,
          index:{
              unique:true
          }
      },
      interval:{
          type:Number,
          required:true
      }
});
var Meta = db.model('meta', schema);

module.exports = Meta;