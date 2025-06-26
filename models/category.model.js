const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CATEGORY=sequelize.define('category',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV1,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=CATEGORY;