const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required : true,
        },

        password: {
            type: String,
            required : true,
            min: 5,
        },
        roles: [{
            type: String,
            required : true,
            default : "customer",
            
        }],
        active: {
            type: Boolean,
            required : true,
            default: true,
        },
    },
    { 
        timestamps: true
    }
)


module.exports= mongoose.model('User',UserSchema)