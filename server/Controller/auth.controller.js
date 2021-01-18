const {findUserByEmail,saveUser ,findbyEmailAndPasswordLoginStatus} = require('../Services/auth.service')



// access config var
process.env.TOKEN_SECRET;
exports.register = async (req,res) =>{
     const {name,email,password} = req.body
     // check the exit user or not

     const checkExitsUser =  await findUserByEmail(email);
     if(checkExitsUser.status === 400){
         console.log("------>")
        console.log(checkExitsUser.status)
         return res.status(checkExitsUser.status).json(checkExitsUser);
         

     }
     // check user already present on db
     console.log("\n checkExitsUser._id:" + JSON.stringify(checkExitsUser));

       if(checkExitsUser.data){
           return res.status(checkExitsUser.status).json({
               message: "Account exits"
           });
       }

     /// now lets save the users

      const  storeUser= await saveUser(req.body);
      if(storeUser.status === 400){
          return  res.status(storeUser.status).json(storeUser);
           
      }
      return res.status(storeUser.status).json({
        message: "Accoumt created",
        user: storeUser.data,
      });
    

}


// login status
  exports.login = async(req,res) =>{

  // lets check user by email and password
  const {email,password} = req.body
  const checkUserLogin = await findbyEmailAndPasswordLoginStatus(email,password);
  
  if(checkUserLogin.status === 400){

    return res.status(checkUserLogin.status).json(checkUserLogin)
  }

     if(checkUserLogin.status === 200)

    return res.status(checkUserLogin.status).json(checkUserLogin)

  }
// auth middleWare
exports.authMiddleWare = (req,res)=>{

 



}