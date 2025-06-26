const express=require('express');
const route=express.Router();
const {signUp,signIn,getUser,getUsers,editUser}= require('../controllers/user.controller');
const storeImage = require('../config/multer');
const authMW = require('../middlewares/authentication.middleware');

route.get('/',getUsers)
route.get('/:id',getUser,authMW)
route.patch('/:id',storeImage.single('profile'),editUser)
route.post('/signup',storeImage.single('profile'),signUp);
route.post('/signin',signIn);

module.exports=route;
