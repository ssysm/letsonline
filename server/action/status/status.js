const Status = require('../../model/status');
const Meta = require('../../model/meta');
allStatus = (req,res)=>{
    "use strict";
    Meta.findOne({},[],(err,counter)=>{
        console.log(counter.counter)
        if(err) res.send(err);
        else {
            Status.find({rid: counter.counter}, [], (err, docs) => {
                console.log(docs)
                if (err) {
                    console.log(err)
                } else {
                    if (docs.length == 0) {
                        res.json({
                            success: false,
                            uri: NaN,
                            message: "No last record found"
                        })
                    } else {
                        res.json({
                            success: true,
                            uri: NaN,
                            response: docs
                        })
                    }
                }
            })
        }
    })
};

status = (req,res)=>{
    "use strict";
    var { uri } = req.query;
    Meta.findOne({},[],(err,counter)=> {
        if(err) res.send(err);
        else {
            Status.find({requestURI: uri,rid:counter.counter}, [],(err,docs)=>{
                if(err){
                    res.send(err)
                }else{
                    if (!docs) {
                        res.json({
                            success: false,
                            uri: uri,
                            message: "No last record found"
                        })
                    } else {
                        res.json({
                            success: true,
                            uri: uri,
                            response: docs
                        })
                    }
                }
            })
        }
    })
};

module.exports.allStatus = allStatus;
module.exports.status = status;