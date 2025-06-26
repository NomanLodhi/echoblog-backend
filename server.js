const app=require('./app');
const sequelize = require('./config/db');
const db = require('./models/index');

require('dotenv').config()
const port=process.env.PORT;
(async()=>{
    try{
        await sequelize.authenticate();
        await db.user.sync({});
        await db.author.sync({});
        await db.blog.sync({});
        await db.comment.sync({});
        console.log('Database connected successfully!!')
    }
    catch(error){
        console.log(`Error while connecting database ${error}`)
    }
})()
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while starting server ${err}`)
    }
    else{
        console.log(`Server started at port : ${port}`)
    }
        
})