const express = require('express');
const router = express.Router();
const { allStatus,status } = require("../action/status/status");
router.get('/latest',(req,res)=>{
    var { uri } = req.query;
    if(!uri){
        allStatus(req,res);
    }else{
        status(req,res);
    }
});

module.exports = router;