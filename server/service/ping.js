const pingPool = require('../model/ping');
const Meta = require('../model/meta');
const { SaveDoc } = require('./ping_save');
Meta.findOne({},[],(err,meta)=>{
    if(err) return false;
    else{
        setInterval(()=>{
            "use strict";
            pingPool.find({enable:true},'requestURI',(err,docs)=>{
                if(err){
                    return false
                }else{
                    var Obj = {};
                    Meta.findOne({},'counter',(err,metaNew)=>{
                        Obj.uri = docs;
                        Obj.rid = metaNew.counter+1;
                        Meta.update({
                            counter:metaNew.counter
                        },{
                            counter:metaNew.counter+1
                        },(err,docsasdasd)=>{
                            if(err)
                                console.log(err);
                            else{
                                SaveDoc(Obj);
                            }
                        })
                    });
                }
            })
        },meta.interval)
    }
});