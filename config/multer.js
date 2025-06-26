const multer = require("multer");
const rootpath = require("../utils/rootpath");
const path=require('path')
const profilepath=path.join(rootpath,'files')
const store=multer.diskStorage({
    destination:(req,file,cb)=>{

       cb(null,profilepath)
    },
    filename: (req,file,cb)=>{
     const picName=Date.now() + Math.round(Math.random()*1E9)+path.extname(file.originalname)
     cb(null,file.fieldname+'-'+picName)
    }
}) 
const storeImage=multer({
    storage:store
})

module.exports=storeImage