import express from 'express'
import User from '../model/registerSchema';
import passport from  'passport';
import passportJwt from 'passport-jwt';
import jwt from 'jsonwebtoken';
import config from  '../config/config';
import myfunc from  '../config/passport';
myfunc(passport);
 
let app = express()

 let apiRoutes= express.Router();


apiRoutes.post('/authenticate', (req, res)=> {  
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(req.body.password, (err, isMatch)=> {
        if (isMatch && !err) {
        	let payload = {
        	  
        		email : req.body.email
        	}
          var token = jwt.sign(payload, config.secret, {
            expiresIn: 10080
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});





apiRoutes.post('/register',function(req,res){
	if(!req.body.email||!req.body.password){
		res.json({ success: false, message: 'please enter correct id or email'});
	}
	else{
		var newUser=new User({
		     name : req.body.name,
         email:req.body.email,
         password:req.body.password,
         confpassword:req.body.confpassword 
		})
	newUser.save(function(err){
		if(err){
			return res.json({success:false, message:'email already exist'});
		}
		res.json({ success:true, message: 'successfully registered '});
		});
	}
});





apiRoutes.get('/', passport.authenticate('jwt',{session:false}),
  function(req,res){
    res.send('It worked!! Id is: ' + req.user.email + '.');
  });

app.use('/api',apiRoutes);

app.use((req,res,next)=>{
  let err=new Error('Not Found');
  err.status(404);
  next(err);
});

export default (apiRoutes)