'use strict'

export default (sequelize, DataTypes) => {

    const Comment = sequelize.define('Comment', {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false
        }
    }, {
        classMethods : {
            associate : (models) => {
                Comment.hasMany(models.Comment)
                Comment.belongsTo(models.Movie, {
                    foreignKey : {
                        allowNull : true
                    }
                })
                Comment.belongsTo(models.User, {
                    foreignKey : {
                        allowNull : true 
                    }
                })
                Comment.belongsTo(models.Comment, {
                    foreignKey : {
                        allowNull : true
                    }
                })
            }
        }
    })

    return Comment 

}