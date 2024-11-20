const jwt=require('jsonwebtoken');
module.exports=function(req,res,next){
    try{
     const token =req.header('x-token');
     if(!token){
        return res.status(400).send('token not found')
     }
     const decode=jwt.verify(token,'jwtsecret');
    req.user=decode.user
    next();
    }
    catch{
     console.log('error in the middle ware ')
    }
}