import express from 'express'
import userSchema from '../model/schema'
let router = express.Router();

router.delete('/:id', (req, res)=>{
   
   userSchema.findOneAndRemove({id:req.params.id}, (err, data)=>{
     if(err){
     	res.json(err)
     }
   else{
   	res.json(data)
   }
   })

});

export default router;