const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const COMMENT=sequelize.define('comment',{
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

module.exports=COMMENT