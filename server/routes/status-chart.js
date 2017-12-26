const express = require('express');
const router = express.Router();
const { chart } = require('../action/status/chart');
router.get('/api/:day',(req,res)=>{
    "use strict";
    chart(req,res);
})

module.exports = router;