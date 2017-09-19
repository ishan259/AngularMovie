import express from 'express'
import userSchema from '../model/schema'
let router = express.Router();

router.put('/:title', (req, res)=>{
   
   userSchema.update({title:req.params.title}, {poster_path:req.body.poster_path}, (err, data)=>{
     if(err){ res.json(err)}
     	else{
     		res.json(data)
     	}

   })

});

export default router;