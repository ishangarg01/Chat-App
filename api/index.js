const express = require('express');
const app = express();
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');
const user = require('./models/User')
const jwt = require('jsonwebtoken');


dotenv.config();

mongoose.connect(process.env.MONGO_URL);
const jwtSecret = (process.env.JWT_SECRET);

app.get('/test', (req, res) => {
  res.json('test ok 123');
});

app.post('/register', async(req,res) => {
  const {username, password} = req.body;
  // username:username;
  // password:password;
  const createdUser= await user.create({username,password})
  //jwt.sign({userId:createdUser,id},).then((err,token)=>
});

app.listen(4040, () => {
  console.log('Server is listening on port 4000 check');
});
