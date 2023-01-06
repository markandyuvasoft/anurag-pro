import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    
    firstName: {
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        },
    address: {
        type:String, 
    },
    number: {
        type:Number,
    }

})

const Auth = mongoose.model('Auth',authSchema)

export default Auth;