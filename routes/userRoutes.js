
const express = require("express")
const routerUser = express.Router()
const userController = require('../controller/userController')

routerUser.route('/')
.get( 
    (req, res)=>{
        userController.getUser
    } 
)
.post(
    (req, res)=>{
        userController.createNewUser
    } 
   )
.delete((req, res)=>{
    userController.deleteUser
} 
)
.patch()


module.exports=routerUser