const user = require('../model/userModel')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')


const getUser = asyncHandler(async(req,res)=>{
    const username = await user.find()
    res.json(username)
})

const createNewUser = asyncHandler(async(req,res)=>{
    const {username,password,roles}=req.body
    
    const userObject = {username,password,roles}
    const user = await user.create(userObject)
})

const deleteUser = async(req,res)=>{
    const username = await user.findByIdAndDelete()
    
}

module.exports = {createNewUser,getUser,deleteUser}