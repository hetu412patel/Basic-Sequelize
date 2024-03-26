const { DataTypes } = require("sequelize");
const db = require('../db');

const Post = db.define("post123", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    postName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    postType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER
    }
},
{
    hooks: {
        beforeCreate: (post) => {
            if(post){
                post.postName = post.postName.toUpperCase()
            }
        }
    }
}
);

module.exports = Post;

