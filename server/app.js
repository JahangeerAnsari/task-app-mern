const bodyparser = require('body-parser')
const express = require('express')
const app = express()
 require('./Database/index')
  const cors = require('cors') 
  app.use(bodyparser.json())
require("dotenv").config();
 
const userRouter = require('./Routes/user.route')
const postRouter = require('./Routes/post.route')
app.use(cors())
  
 //=> '/' =====>http://localhost:5000/
//

// initial route for user
app.use('/api',userRouter)

// for post route
app.use('/api',postRouter)

app.listen(5000,() =>{
    console.log("server is running on:" + 5000)
})



