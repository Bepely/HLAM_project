var express = require('express');
var artistPageRoute = express.Router();

artistPageRoute.use('/artist', (req, res)=>{
    console.log('artistPageSUKA');
    res.send('ARTIST PAGE')
})




module.exports = artistPageRoute;