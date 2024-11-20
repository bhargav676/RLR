const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User=require('./signupmodel');
const jwt=require('jsonwebtoken')
const app = express();
const middleware=require('./middleware')
app.use(express.json());
app.use(cors());

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

mongoose.connect('mongodb+srv://322103312083:951509290@cluster0.pz9fe.mongodb.net/rlr')
  .then(() => {
    console.log('Database connected successfully'); 
  })
  .catch((error) => {
    console.error('Error in database connection:', error.message);
  });

app.post('/signup',async(req,res)=>{
    const {username,mobile,email,password}=req.body
    try{
       const exist=await User.findOne({email});
       if(exist){
        return res.status(400).json({message:"uer already exist"})
       }
       const newuser=new User({email,username,password,mobile})
       await newuser.save();
       res.status(200).json({message:"register sucessfully"})
    }
    catch{
        console.log("error occurs in the signup route")
        res.status(500).json({message:'error in the registration'})
    }
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const exist=await User.findOne({email})
        if(!exist){
            return res.status(400).json({message:"user not found"})
        }
        if(exist.password !== password){
            return res.status(400).json({message:"password incorret"})
        }
        const payload={
            user:{
                id:exist.id
            }
        }
        jwt.sign(payload,'jwtsecret',{expiresIn:3600000},
            (err,token)=>{
                if(err) throw err;
                return res.json({token})
            }

        )
    }
    catch{
        console.log("error in the login route")
    }
})
app.get('/profile',middleware,async(req,res)=>{
     try{
         const exist=await User.findById(req.user.id)
         if(!exist){
            return res.status(400).json({message:"token is not found"})
         }
         res.send(exist)
     }
     catch{
        console.log("error in the profile route");
        return res.status(500).json({message:"server error"})
     }
})


