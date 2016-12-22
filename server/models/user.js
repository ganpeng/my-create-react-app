'use strict'

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        username : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password_digist : {
            type : DataTypes.STRING,
            allowNull:false
        },
        nickName : {
            type : DataTypes.STRING
            // allowNull : false
        },

        gender : {
            type : DataTypes.ENUM,
            values : ['female', 'male']
        },

        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique: true
        },

        phone : {
            type : DataTypes.STRING,
            // allowNull : false
        },

        birthday : {
            type : DataTypes.DATE
        },

        isguy : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },
        desc : {
            type : DataTypes.TEXT,
            defaultValue : ''
        },
        avatar : {
            type : DataTypes.STRING,
            default : ''
        }
    }, {
        timestamps : true,
        classMethods : {
            associate : (models) => {
                User.hasMany(models.Comment)
                User.hasMany(models.Movie)
            }
        }
    })

    return User

}