const express = require("express")
const { userModel } = require("../Models/user.model")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")



const userRouter = express.Router()

userRouter.post("/signup", async(req, res)=>{
const {name , email, password}= req.body
try {
    bcrypt.hash(password, 10, async(err, hash)=>{
        if(err){
            res.status(400).json({error:err.message})
        }else{
            const user= new userModel({name, email, password:hash})
            await user.save()
        }
    })
    res.status(201).json({msg:"user has been registered", user: req.body})
} catch (err) {
    res.status(400).json({error:err.message})
}
})


userRouter.post("/login", async(req, res)=>{
const {email, password}= req.body
try {
    const user = await userModel.findOne({email})
    if(user){
        bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
            let token = jwt.sign({id: user._id }, "yadav")
            res.status(200).json({msg:"Logged in", token})
        }else{
            res.status(401).json({error:err})
        }
        })
    }
    else{
        res.status(401).json({msg:"user does not exist"})
    }
} catch (error) {
    res.status(401).json({error: err.message})
}
})


module.exports= {userRouter}