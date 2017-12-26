const express = require('express');
const router = express.Router();
const { allStatus,status } = require("../action/status/status");
const { history } = require("../action/status/history");
router.get('/latest',(req,res)=>{
    var { uri } = req.query;
    if(!uri){
        allStatus(req,res);
    }else{
        status(req,res);
    }
});

router.get('/history',(req,res)=>{
    history(req,res);
});

module.exports = router;