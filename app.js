const express=require('express');
const app=express();
const path=require('path'); 
const cors=require('cors');
const user=require('./routes/user.route');
const admin=require('./routes/admin.route');
const author=require('./routes/author.route')
const blogs=require('./routes/blog.route')
const comments=require('./routes/comment.route')
app.use(express.json());
const corsOptions = {
  origin: 'https://echoblog-theta.vercel.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Always first, before static files
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/api/v1/users',user);
app.use('/api/v1/admin',admin);
app.use('/api/v1/author',author);
app.use('/api/v1/blogs',blogs);
app.use('/api/v1/comments',comments);


module.exports=app;