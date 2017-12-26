const Status = require('../../model/status');
history = (req,res)=>{
    var { month,uri } = req.query;
    if(!month){
        res.json({
            success:false,
            message:"No Month passed in"
        });
    }
    else{
        if(!uri){
            Status.find({
                date:{
                    $gt: parseInt(Date.now() - parseInt(parseInt(month)*2629746000))
                }
            },[],(err,docs)=>{
                "use strict";
                if(err){
                    res.send(err);
                }
                else{
                    res.json({
                        success:true,
                        uri:null,
                        response:docs
                    })
                }
            })
        }
    }
};

module.exports.history = history;