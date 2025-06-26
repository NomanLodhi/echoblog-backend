const db = require("../models")
const bcrypt= require('bcryptjs')

const getAdmin=async(req,res)=>{
    try{
        // req.role='admin'
        res.status(200).json({msg:'admin accessed',role:req.role})
    }
    catch(err){
        res.status(401).json({msg:err.message})
    }
}
const getAdminusers=async (req,res)=>{
    try{
     const users=await db.user.findAll();
    
     res.status(200).json({status:'success',data:users})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const getAdminuser= async(req,res)=>{
    try{
        const {id}=req.params
    const singleUser=await db.user.findOne({where:{id}})
    res.status(200).json({msg:"User access",data:singleUser})
}
catch(error){
    res.status(401).json({msg:error.message})
    
    }
}
const deleteAdminuser= async(req,res)=>{
    try{
        const {id}=req.params
    await db.user.destroy({where:{id}})
    res.status(200).json({msg:"User deleted sucessfully!!"})
}
catch(error){
        res.status(401).json({msg:error.message})
        
    }
}
const editAdminuser= async(req,res)=>{
    try{
    const {id}=req.params;
    const {name,email,password}=req.body;
    const profile=req.file.filename;
    const salt=await bcrypt.genSalt(10);
    const mix=await bcrypt.hash(password,salt)
    await db.user.update({name,email,password:mix,profile},{where:{id}})
    res.status(200).json({msg:"User edited sucessfully!!"})
}
catch(error){
    res.status(401).json({msg:error.message})
    
 }    
}
const editAuthoradmin=async(req,res)=>{
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
const getAuthors= async(req,res)=>{
    try{
    const author=await db.author.findAll({
    include:[{
        model:db.user
     }]
    })
    if(!author){
        return res.status(401).json({msg:'author not found'})
    }
    res.status(200).json({status:'success',data:author})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}
const deleteAdminauthor=async(req,res)=>{
    try{
     const {id}=req.params;
     await db.author.destroy({where:{user_id:id}})
     const user=await db.user.findByPk(id)
     await user.update({role:'reader'})
     res.status(200).json({status:'success',msg:'Author deleted successfully!!'})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}

module.exports={getAdmin,getAdminusers,getAdminuser,deleteAdminuser,editAdminuser,editAuthoradmin,getAuthor,getAuthors,deleteAdminauthor}