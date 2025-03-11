 
const mongoose=require('mongoose');
const doctorSchema=new mongoose.Schema({
   name: { type: String, required: true },
   age:{ type:Number,required:true},
   gender:{type:String,required:true},
   address:{type:String,required:true},
   date_of_registration:{type:String,required:true},
   specialist: { type: String, required: true },
   experience: { type: Number, required: true },
   visiting_time: { type: String, required: true }
});

const doctor = mongoose.model('doctor', doctorSchema)
module.exports=doctor
