const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Blog extends Model {
}

Blog.init(
  {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'id'
      }
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Comment;