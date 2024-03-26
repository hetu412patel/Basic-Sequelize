const {DataTypes } = require("sequelize");
const db = require('../db');
const User = require("./user");
const Post = require("./post");

const user_post = db.define("user_post", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
          },
      },
      postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Post,
            key: 'id',
          },
      }
  });

  module.exports = user_post;

