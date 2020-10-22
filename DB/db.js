const mongoose = require('mongoose')

mainfunc(){
mongoose.connect('mongodb+srv://Bepely: Br4am70uk91@root.ytzk1.gcp.mongodb.net/mainDB?retryWrites=true&w=majority')

mongoose.connection.once('open', ()=>{
    console.log('connected to DB');
})


}
module.exports(mainfunc)