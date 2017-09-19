import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let dbSchema = new Schema({
     name:String,
     email:String,
     password:String,
     confpassword:String      
},{collection:'cols',versionKey: false});


dbSchema.methods.comparePassword = function(pw, cb) {  
 
   if(this.password==pw){
   cb(null, true);
   }
   else
    cb(null, false)
   };
let dataCollection = mongoose.model('col', dbSchema);

export default ( dataCollection);