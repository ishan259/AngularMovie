import express from 'express'
import userSchema from  '../model/schema'
let router = express.Router();

router.post('/', (req, res)=>{
   console.log(req.body);
   let objUser = new userSchema({
   	   id : req.body.id,
       title:req.body.title,
       poster_path:req.body.poster_path,
       release_date:req.body.release_date,  
       vote_count:req.body.vote_count
   });

   objUser.save((error, data)=>{
       if(error){ res.json(error)}
       	else{ res.json(data)}

   })  

});



module.exports= router;