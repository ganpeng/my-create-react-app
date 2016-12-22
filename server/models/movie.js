'use strict'

export default (sequelize, DataTypes) => {
    
    const Movie = sequelize.define('Movie', {
        // 电影ID
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        // 电影中文名
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        // 电影原名
        original_title : {
            type : DataTypes.STRING,
            defaultValue : ''
        },
        // 电影别名，格式为"电影1，电影2，电影3"
        aka : {
            type : DataTypes.STRING,
            defaultValue : ''
        },
        // 电影的评分
        // rating : {
        //     type : DataTypes.INTEGER,
        //     defaultValue : 0,
        //     validate : {
        //         max : 10,
        //         min : 0
        //     }
        // },

        // 评分人数 
        ratings_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
            validate : {
                min : 0
            }
        },

        //  想看人数
        wish_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
            validate : {
                min : 0
            }
        },

        // 看过人数
        collect_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
            validate : {
                min : 0
            }
        },

        // 条目分类，movie或者tv，默认为movie
        subtype : {
            type : DataTypes.STRING,
            defaultValue : 'movie'
        },

        // 导演，格式为“导演1， 导演2， 导演3”
        directors : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 主演，格式为“主演1， 主演2， 主演3”
        casts : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 编剧, 格式为“编剧1， 编剧2， 编剧3”
        writers : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 电影官网
        website : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 上映日期
        pubdate : {
            type : DataTypes.DATE
        },

        // 年代
        year : {
            type : DataTypes.STRING
        },

        // 语言， 格式为“语言1， 语言2，语言3”
        language : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 影片类型，格式为“类型1， 类型2， 类型3”
        genres : {
            type : DataTypes.STRING,
            defaultValue : ''
        },

        // 简介
        summary : {
            type : DataTypes.TEXT,
            defaultValue : ''
        }
    }, {
        classMethods : {
            associate : (models) => {
                Movie.hasMany(models.Comment)
                Movie.belongsTo(models.User, {
                    foreignKey : {
                        allowNull : true
                    }
                })
            }
        }
    })

    return Movie

}