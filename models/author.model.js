const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const db=require('./index')
const AUTHOR=sequelize.define('author',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV1,
        primaryKey:true
    },
    bio:{
        type:DataTypes.STRING(200)
    },
    qualification:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:db.user,
            key:'id'
        }
    }
})

module.exports=AUTHOR;