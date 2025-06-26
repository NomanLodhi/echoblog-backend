const db = require("../models")


const postcomment=async(req,res)=>{
try{
    const {userId,blogId}=req.params;
    const {name}=req.body;
    await db.comment.create({
        user_id:userId,
        blog_id:blogId,
        name:name
    })
    
    await res.status(200).json({msg:'comment posted!!'})
    }
    catch(err){
    await res.status(401).json({msg:err.message})
}
}
const getcomment=async(req,res)=>{
try{
    const {blogId}=req.params;
    const comment=await db.comment.findAll({where:{blog_id:blogId},include:[{
        model:db.user,
        attributes:['id','name','profile']
    }]})
    
    await res.status(200).json({data:comment})
    }
    catch(err){
    await res.status(401).json({msg:err.message})
}
}

const deleteComment=async(req,res)=>{
   try{
     const {commentId}=req.params;
     await db.comment.destroy({where:{id:commentId}})
     await res.status(200).json({msg:'Comment deleted successfully!!'})
   }
   catch(err){
    await res.status(401).json({msg:err.message})
   }
}
const getComments=async(req,res)=>{
    try{
      const comments=await db.comment.findAll({include:{
        model:db.user,
        attributes:['name','profile']
      }})
      await res.status(200).json({data:comments})
    }
    catch(err){
        await res.status(401).json({msg:err.message})
    }
}
module.exports={postcomment,getcomment,deleteComment,getComments}

