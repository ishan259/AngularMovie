import express from 'express'
import path from 'path'
import bodyparser from 'body-parser'
import http from 'http'
import logger from 'morgan'
import mongoose from 'mongoose'
import config from './config/config'
import schema from './model/schema'
import index from './routes/index'
import update from './routes/update'
import users from './routes/users'
import deletee from './routes/deletee'
import like from './routes/like'
import register from './routes/register'
import fs from 'fs'
import cors from 'cors'
import passport from  'passport';
import passportJwt from 'passport-jwt';

import jwt  from 'jsonwebtoken';
import User from './model/registerSchema';
import api from './routes/api';



http.createServer((req,res)=>{
  //res.writeHead(200,{'Content-Type':'text/plain'});
})
/*import json from './routes/data'*/
let app = express();
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), {flags: 'a'})




// setup the logger
app.use(cors());
app.use(logger('combined', {stream: accessLogStream}))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/users', users);
app.use('/update', update);
app.use('/deletee', deletee);
app.use('/register',register);
app.use('/like', like);
app.use(passport.initialize());
app.use('/api', api);
/*app.use('/json',json);*/
mongoose.connect(config.dbUrl);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'error occured'));

console.log('server running');

export default (app);

