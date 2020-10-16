const express = require('express');
const app = express();
const mongoose = require('mongoose')
const router = require('./routes/router');

let port = process.env.PORT || 3003;


app.get('/',(req, res) => {
    res.send('SHALOM4IK')
})

app.listen(port, ()=>{
    console.log(`CEPBEP 3ATTCK 70T0B0. TT0PT ${port}`);
});