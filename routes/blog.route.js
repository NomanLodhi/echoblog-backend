const express=require('express');
const routes=express.Router();
const {postBlog, getBlog, allBlogs}=require('../controllers/blog.controller');
const storeImage = require('../config/multer');

routes.get('/',allBlogs)
routes.get('/singleblog/:blogId',getBlog)
routes.post('/:authorId',storeImage.single('featuredImage'),postBlog)


module.exports=routes
    