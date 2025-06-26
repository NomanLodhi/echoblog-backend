const express=require('express');
const {getAdmin,getAdminusers,getAdminuser,deleteAdminuser, editAdminuser, editAuthoradmin, getAuthors,getAuthor, deleteAdminauthor}=require('../controllers/admin.controller');
const AuthorizationMW = require('../middlewares/authorization');
const roleauthMV = require('../middlewares/authentication.middleware');
const storeImage = require('../config/multer');


const route=express.Router();
 
route.get('/',roleauthMV,AuthorizationMW(['admin']),getAdmin)
route.get('/users',getAdminusers)
route.get('/users/:id',getAdminuser)
route.delete('/users/:id',deleteAdminuser)
route.patch('/users/:id',storeImage.single('profile'),editAdminuser)
route.patch('/author/:id',editAuthoradmin)
route.get('/author/:userId',getAuthor)
route.get('/authors',getAuthors)
route.delete('/author/:id',deleteAdminauthor)

module.exports=route;
