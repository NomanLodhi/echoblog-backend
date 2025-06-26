const db = require("../models")


const postBlog=async(req,res)=>{
    try{
        const {authorId}=req.params;
        const {title,description}=req.body;
        const featuredImage=req.file.filename;
        const author=await db.author.findByPk(authorId);
        if(!author){
          return  res.status(401).json({msg:'user is not eligible to upload blog'})
        }
        
       const blog= await db.blog.create({author_id:authorId,title:title,description:description,featuredImage:featuredImage})
        res.status(200).json({msg:'Blog upload',data:blog})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const allBlogs=async(req,res)=>{
    try{
   const blogs=await db.blog.findAll()
   await res.status(200).json({data:blogs})
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}
const getBlog=async(req,res)=>{
    try{
        const {blogId}=req.params;
        const blog=await db.blog.findOne({where:{id:blogId}})
        await res.status(200).json({data:blog})
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}

module.exports={postBlog,allBlogs,getBlog}