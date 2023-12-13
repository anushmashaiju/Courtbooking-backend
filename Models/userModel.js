const mongoose=require('mongoose')
const userShema=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   phone :{
        type:Number,   
    },
    password:{
        type:String,
        required:true
    },
   role:{
    type:Number,
    required:true,
    default:3
   }    
})
const users=mongoose.model('users',userShema)
module.exports=users