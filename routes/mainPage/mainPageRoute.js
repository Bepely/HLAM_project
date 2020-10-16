var express = require('express');
var mainPageRoute = express.Router();

mainPageRoute.use('/', (req, res)=>{
    console.log('mainPageSUKA');
    res.send('Main page')
})



module.exports = mainPageRoute;