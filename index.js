const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route = require('./routes/router.js')
const db = require('mongodb');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
//17.10.2020 
//DOBAV' BAZU DANNbIX FAUNA ( FaunaDB )!
let port = process.env.PORT || 3003;
const schema = require('./schema/schema');


mongoose.connect('mongodb+srv://Bepely:87654321qqqq@root.ytzk1.gcp.mongodb.net/mainDB?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true })

mongoose.connection.once('open', ()=>{
    console.log('connected to DB')})



app.use(route);


app.listen(port, ()=>{
    console.log(`CEPBEP 3ATTCK 70T0B0. TT0PT ${port}`)
})