var Meta = require('./model/meta');
var pingPool = require('./model/ping');
var local = process.env.PORT || 3000;
Meta.create({
        counter:0,
        interval:45000,
    },function (err) {
    if (err) throw err;
    else{
        console.log('Finish Create Meta');
        pingPool.create({
            nickname: 'Main Site',
            requestURI: 'http://theeditorstudio.com'
        },(err)=>{
            "use strict";
            if(err) throw err;
            else{
                console.log('Finish Add URI');
                return 0;
            }
        })
    }
});