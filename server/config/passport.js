  
import User from  '../model/registerSchema';  
import  config   from './config';

/*import {JwtStrategy as Strategy} from  'passport-jwt';
import  {ExtractJwt as ExtractJwt}   from 'passport-jwt';*/
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

let pass=(passport)=> {  
  const opts = {
   jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey : config.secret

  };
 
  passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
    User.findOne({email: jwt_payload.email}, (err, user)=> {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};

export default (pass)

