const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const USER= sequelize.define('user',{
    id:{
     type:DataTypes.UUID,
     defaultValue:DataTypes.UUIDV1,
     primaryKey:true        
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
     type:DataTypes.STRING,
     allowNull:false
    }, 
    role:{
    type:DataTypes.STRING,
    defaultValue:'reader'
    },
    profile:{
        type:DataTypes.STRING
    }
})

module.exports=USER;