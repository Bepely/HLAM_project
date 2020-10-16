const express = require('express');
const router = express.Router();
const mainPageRoute = require('./mainPage/mainPageRoute');
const artistPageRoute = require('./artistPage/artistPageRoute')


console.log('sallllaam');
router.all('/', (mainPageRoute))
router.all('/artist', (artistPageRoute));


module.exports = router;;