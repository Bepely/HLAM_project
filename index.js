const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route = require('./routes/router.js')
//17.10.2020 
//DOBAV' BAZU DANNbIX FAUNA ( FaunaDB )!
let port = process.env.PORT || 3003;



//GRAPHQL SECTOR


//!TESTING!TESTING!TESTING!
app.use(route);

app.listen(port, ()=>{
    console.log(`CEPBEP 3ATTCK 70T0B0. TT0PT ${port}`);
});