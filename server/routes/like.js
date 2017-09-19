import express from 'express'
import userSchema from '../model/schema'
let router = express.Router();

router.put('/:id', (req, res)=>{
   userSchema.findOneAndUpdate({id:req.params.id},{$set:{vote_count:req.body.vote_count}}, (err, data)=>{
         if(err){ res.send(err) }
         	else{
         		res.json(data);
         	}
   });

});

export default router;