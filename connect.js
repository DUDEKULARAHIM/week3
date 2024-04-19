const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log('No connection ${err}');
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