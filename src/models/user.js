const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    // age:{
    //     type:Number
    // },
    gender:{
        type:String
    },
    password:{
        type:String
    }
})

const User=mongoose.model('user',userSchema)
const Client=mongoose.model('client',userSchema)
const Login=mongoose.model('login',userSchema)

module.exports={
    User,Client,Login
}