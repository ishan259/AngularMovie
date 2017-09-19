import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let dbSchema = new Schema({
    id: {type:Number, unique:true},
    title: String,
    poster_path : String,
    release_date:String,
    vote_count:Number
     
},{collection:'movie',versionKey: false});
let dataCollection = mongoose.model('dataCollection', dbSchema);

export default dataCollection;