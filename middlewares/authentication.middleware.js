const JWT=require('jsonwebtoken');
require('dotenv').config();
const jwt_token=process.env.JWT_TOKEN;
const authMW=(req,res,next)=>{
    let check=req.headers.authorization || req.headers.Authorization;
    let token=check.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({ msg: "Token is missing" });
    }
    JWT.verify(token,jwt_token,(err,decoded)=>{
    if(!check){
        return res.status(500).json({msg:err.message})
    }
    console.log(decoded)
    if(!decoded || !decoded.id){
        return res.status(401).json({msg:"Invalid token"})
    }
         req.id=decoded.id
        next()
    
})
}
const roleauthMV=(req,res,next)=>{
    req.role=['admin','author'];
    next()
}
module.exports=authMW;
module.exports=roleauthMV;