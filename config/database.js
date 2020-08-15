const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const CONNECTION_URI= "mongodb://localhost:27017/ticket-master-bk"
mongoose.connect(process.env.MONGODB_URI || CONNECTION_URI,{useNewUrlParser: true})
    .then(()=>{
        console.log('succesfully connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose
