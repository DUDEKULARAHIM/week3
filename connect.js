const mongoose=require("mongoose");
const env=require("dotenv");
env.config({path:".env"})
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log(err);
})

const signupsch=new mongoose.Schema({
    fname:{
        type:String,
        require:true,
        trim:true
    },
    lname:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,   //email should be unique
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})

const Student=mongoose.model("Registration",signupsch);
module.exports=Student;