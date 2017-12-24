var request = require('sync-request');
const Status = require('../model/status');
SaveDoc = (Obj)=>{
    "use strict";
    for(var i = 0;Obj.uri.length > i;i++){
            try {
                request('GET', Obj.uri[i].requestURI, {
                    timeout: 60000,
                    headers: {
                        'user-agent': 'Let\'s Online'
                    }
                });
            }catch(e){
                if(e){
                    Status.create({
                        rid: Obj.rid,
                        request: {
                            uri: Obj.uri[i].requestURI,
                            ua: "Let's Online",
                            method: "GET"
                        },
                        response: {
                            statusCode: 500,
                            responseTime: 60000
                        }
                    }, (err, docs) => {
                        "use strict";
                        if (err)
                            console.log(err);
                        else {
                            return true
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
                Status.create({
                    rid: Obj.rid,
                    request: {
                        uri: Obj.uri[i].requestURI,
                        ua: "Let's Online",
                        method: "GET"
                    },
                    response: {
                        statusCode: res.statusCode,
                        responseTime: reqTime
                    }
                }, (err, docs) => {
                    "use strict";
                    if (err)
                        console.log(err);
                    else {
                        return true
                    }
                })
            }
    }
};

module.exports.SaveDoc = SaveDoc;