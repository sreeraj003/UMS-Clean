require('./config/mongo').connect()
const express = require("express")
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const userRoutes = require('./Routes/UserRoutes')

app.post('/',userRoutes)

app.listen(3030,()=>{
    console.log("db connected");
})