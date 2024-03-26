const express = require('express');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

require('./db')

const User = require('./model/user')
const Object = require('./model/object')
const Tag = require('./model/tag')
const Post = require('./model/post');
const user_post = require('./model/user_post');

const userRoutes = require('./routes/user-routes')
const objectRoutes = require('./routes/object-routes')
const tagRouters = require('./routes/tag-routes');
const postRouters = require('./routes/post-routes');
const selfJoinRouters = require('./routes/self-join-routes')

app.use(express.json());
app.use(userRoutes)
app.use(objectRoutes)
app.use(tagRouters)
app.use(postRouters)
app.use(selfJoinRouters)

// one - to - one
User.hasOne(Tag, {foreignKey : 'userId'})
Tag.belongsTo(User, {foreignKey : 'userId'})

// one - to - many
User.hasMany(Object, {foreignKey : 'userId',  onDelete: 'cascade' });
Object.belongsTo(User, {foreignKey : 'userId'})

// many - to - many
User.belongsToMany(Post, { through: user_post, foreignKey: "userId"});
Post.belongsToMany(User, { through: user_post, foreignKey: "postId"});

// self-join
User.hasOne(User, { as: 'Parent' });

 app.listen(5000, () => {
    console.log("server connected");
 });

module.exports = app;