const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const BLOG=sequelize.define('blog',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV1,
        primaryKey:true
    },
    featuredImage:{
        type:DataTypes.STRING,
        allowNull:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING(1000),
        allowNull:false
    }
})
module.exports=BLOG