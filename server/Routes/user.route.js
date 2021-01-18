const app = require('express')
const {register,login} = require("../Controller/auth.controller")
  const requiredSignin = require("../middleWareAuth/requiredSignin") 
 const route = app.Router()

//  route.post('/register',(req,res) =>{
//      res.send(" helo from register")
//  })

// route.get('/protected',requiredSignin,(req,res) => {
//     res.send("hello from middlewarre")
// })
 
 route.post('/register',register)

 route.post('/login',login)

 module.exports = route;

 