const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String
    },
    password:{
        type:String
    },
    about:{
        type:String,
        default:"Hey Im Using This!"
    }
})

const User=mongoose.model('user',userSchema)
const Client=mongoose.model('client',userSchema)
const Login=mongoose.model('login',userSchema)

module.exports={
    User,Client,Login
}