const Status = require('../../model/status');

chart = (req,res)=>{
    "use strict";
    var { day } = req.params;
    if(!day){
        res.json({
            success:false,
            message:"Plaese Pass in a Day"
        })
    }else{
        Status.find({
            date:{
                $gt: parseInt(Date.now() - parseInt(parseInt(day)*86400000))
            },
            "requestPool.request.nickname":"Main Site"
        },"requestPool.response.responseTime date",(err,docs)=>{
            if(err)
                res.send(err)
            else{
                var obj= {};
                var series = [];
                var dateOptions = {
                    hour: "2-digit",
                    minute: "2-digit",
                    year: "numeric",
                    month: "short",
                    day: "numeric",

                };
                for(var i = 0;docs.length > i;i++){

                    series.push({
                        name:new Date(docs[i].date).toLocaleTimeString("en-us", dateOptions),
                        value:docs[i].requestPool[0].response.responseTime
                    });
                }
                obj.name = "Main Site";
                obj.series= series;
                res.json([obj]);
            }
        })
    }
};

module.exports.chart = chart;