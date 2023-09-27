
const express = require("express")
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('selamat datang')

}
)

module.exports= router