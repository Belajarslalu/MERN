const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const connectDb=require('./config/dbConnect')
const port =3000

connectDb()
const app = express()



app.use('/', require('./routes/route'))
app.use('/user', require('./routes/userRoutes'))



app.use('/',(req,res)=>{
    res.send('page not found')
   

})




mongoose.connection.once('open', ()=> {
    app.listen(port,()=>{

        console.log(`server run on ${port}`)
    
    })
})



mongoose.connection.on('error', err=> {
    console.log(err)


})


