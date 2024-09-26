const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {    
        word:{
            type: String,
        },
        allowed:{
            type: Boolean,
        },
        status:{
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;