var express = require('express');
var router = express.Router();

console.log('sallllaam');

router.get('/', (req, res)=>{
    res.send('SALAM')});
  
    router.post('/brat', (req, res)=>{
        res.send('BRATUHA')});
      
module.exports = router;;