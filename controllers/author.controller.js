const db = require("../models")



const authorRegister= async (req,res)=>{
    try{
    const {userId,qualification,bio}=req.body;
    const user = await db.user.findByPk(userId)
    if(!user){
        res.status(401).json({msg:'user not found'})
    }
    await user.update({role:'author'})

    const author=await db.author.create({user_id:userId,qualification,bio})    
    res.status(200).json({msg:'Success',author})
    }
    catch(err){
        res.status(401).json({msg:err.message})
    }
}
const getAuthor= async(req,res)=>{
    try{
    const {userId}=req.params;    
    const author=await db.user.findOne({
    where:{id:userId},
    include:[{
        model:db.author
     }] 
    })
    if(!author){
        return res.status(401).json({msg:'author not found'})
    }
    res.status(200).json({status:'success',data:{
        name:author.name,
        bio:author.author.bio,
        qualification:author.author.qualification,
        id:author.author.id,
    }})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const editAuthor=async(req,res)=>{
    try{
      const {userId}=req.params;
      const {name,qualification,bio}=req.body;
      const user=await db.user.findByPk(userId);
      if(!user){
        return res.status(401).json({msg:'user not found'})
      }
      user.update({name});
      const author=await db.author.findOne({where:{user_id:userId}});
      if(!author){
        return res.status(401).json({msg:"Author not found"})
      }
      author.update({qualification,bio});
      res.status(200).json({msg:"Author updated successfully!!"})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const getAuthorBlog=async(req,res)=>{
    try{
        const {authorId}=req.params
        const blog=await db.author.findAll({
            where:{id:authorId},
            include:[{ 
                model:db.blog
            }]
        })
        console.log(blog)
      await  res.status(200).json({status:"success",data:blog})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const authorSingleblog=async(req,res)=>{
    try{
        const {blogId}=req.params;
        const blog=await db.blog.findOne({where:{id:blogId}})
        if(!blog){
           return res.status(401).json({msg:'Blog not found!'})
        }
     else{
         await res.status(200).json({data:blog})
        }
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}

const authoreditBlog=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const featuredImage=req.file.filename;
        const {blogId}=req.params;
        const blog=await db.blog.findOne({where:{id:blogId}})
        if(!blog){
           return res.status(401).json({msg:'Blog not found!'})
        }
     else{
         await blog.update({title:title,description:description,featuredImage:featuredImage})
         await res.status(200).json({message:'Blog edited successfully'})
        }
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}
const authorDelblog=async(req,res)=>{
    try{
        const {blogId}=req.params;
        await db.blog.destroy({where:{id:blogId}})
        await res.status(200).json({status:'success',message:"Blog deleted successfully!!"})
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}
module.exports={authorRegister,getAuthor,editAuthor,getAuthorBlog,authorSingleblog,authoreditBlog,authorDelblog}