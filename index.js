const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route = require('./routes/router.js')

const graphqlHTTP = require('express-graphql').graphqlHTTP;
//17.10.2020 
//DOBAV' BAZU DANNbIX FAUNA ( FaunaDB )!
let port = process.env.PORT || 3003;
const schema = require('./schema/schema');



//GRAPHQL SECTOR
console.log('shitfuck');
app.use('/graphQL',graphqlHTTP({
  schema,
  graphiql: true
}));
//!TESTING!TESTING!TESTING!
app.use(route);

app.listen(port, ()=>{
    console.log(`CEPBEP 3ATTCK 70T0B0. TT0PT ${port}`);
});