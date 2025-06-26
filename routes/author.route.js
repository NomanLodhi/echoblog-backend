const express=require('express');
const route=express.Router()
const { authorRegister, getAuthor, editAuthor, getAuthorBlog, authorSingleblog, authoreditBlog, authorDelblog } = require("../controllers/author.controller");
const storeImage = require('../config/multer');
route.get('/authorsingleblog/:blogId',authorSingleblog) 
route.delete('/authordeleteblog/:blogId',authorDelblog) 
route.patch('/authoreditblog/:blogId',storeImage.single('featuredImage'),authoreditBlog) 
route.post('/register',authorRegister)
route.get('/:userId',getAuthor)
route.patch('/:userId',editAuthor)
route.get('/blog/:authorId',getAuthorBlog)

module.exports=route

