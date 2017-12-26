var request = require('sync-request');
var Status = require('../model/status');
SaveDoc = (Obj)=>{
    "use strict";
    var arr = [];
    for(var i = 0;Obj.uri.length > i;i++){
        console.log(Obj.uri[i]);
            try {
                request('GET', Obj.uri[i].requestURI, {
                    timeout: 60000,
                    headers: {
                        'user-agent': 'Let\'s Online'
                    }
                });
            }catch(e){
                if(e){
                    arr.push({
                        request: {
                            nickname: Obj.uri[i].nickname,
                            uri: Obj.uri[i].requestURI,
                            ua: "Let's Online",
                            method: "GET"
                        },
                        response: {
                            statusCode: 500,
                            responseTime: 60000
                        }
                    })
                }
            }finally {
                var start = new Date().getTime();
                var res = request('GET', Obj.uri[i].requestURI, {
                    timeout: 30000,
                    headers: {
                        'user-agent': 'Let\'s Online'
                    }
                });
                var end = new Date().getTime();
                var reqTime = parseInt(end - start);
                arr.push({
                    request: {
                        nickname:Obj.uri[i].nickname,
                        uri: Obj.uri[i].requestURI,
                        ua: "Let's Online",
                        method: "GET"
                    },
                    response: {
                        statusCode: res.statusCode,
                        responseTime: reqTime
                    }
                });
            }
    }
    Status.create({
        rid:Obj.rid,
        requestPool:arr,
        date:parseInt(Date.now())
    },(err,docs)=>{
        return !err;
    })
};

module.exports.SaveDoc = SaveDoc;