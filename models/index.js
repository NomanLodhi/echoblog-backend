const USER =require('./user.model')
const AUTHOR =require('./author.model');
const BLOG = require('./blog.model');
const COMMENT = require('./comment.model');
const CATEGORY = require('./category.model');
const db={}
db.user=USER;
db.author=AUTHOR;
db.blog=BLOG;
db.comment=COMMENT
db.category=CATEGORY
db.user.hasOne(
    db.author,{
        foreignKey:'user_id'
    });
db.author.belongsTo(db.user,{foreignKey:'user_id'});
db.author.hasMany(
    db.blog,{
        foreignKey:'author_id'
    }
)
db.blog.belongsTo(db.author)

db.user.hasMany(db.comment,{
    foreignKey:'user_id'
})
db.comment.belongsTo(db.user,{
    foreignKey:'user_id'
})

db.blog.hasMany(db.comment,{
    foreignKey:'blog_id'
})

db.comment.belongsTo(db.blog,{
    foreignKey:'blog_id'
})


module.exports=db;