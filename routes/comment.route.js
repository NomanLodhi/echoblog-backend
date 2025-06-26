const express=require('express');
const route=express.Router();
const {postcomment, getcomment, deleteComment, getComments}=require('../controllers/comment.controller')

route.get('/',getComments);
route.post('/postcomment/:userId/:blogId',postcomment);
route.get('/getcomment/:blogId',getcomment);
route.delete('/deletecomment/:commentId',deleteComment);

module.exports=route