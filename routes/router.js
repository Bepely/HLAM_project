const express = require('express');
const router = express.Router();
const mainPageRoute = require('./mainPage/mainPageRoute');
const artistPageRoute = require('./artistPage/artistPageRoute');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema')



router.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
router.all('/', (mainPageRoute))
router.all('/artist', (artistPageRoute));


module.exports = router;;