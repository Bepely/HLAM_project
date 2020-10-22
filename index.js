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


const MongoClient = db.MongoClient;
const uri = "mongodb+srv://Bepely:Br4am70uk91@root.ytzk1.gcp.mongodb.net/root?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {

  const collection = client.db("mainDB").collection("content");
  console.log('connected');
  client.close();
});
mongoose.connection.once('open', ()=>{
  console.log('connected to DB')})


app.use(route);

app.listen(port, ()=>{
    console.log(`CEPBEP 3ATTCK 70T0B0. TT0PT ${port}`);
});