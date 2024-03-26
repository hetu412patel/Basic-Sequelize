const { Op } = require('sequelize');
const Post = require('../model/post');
const User = require('../model/user');
const user_post = require('../model/user_post');

const createPost = async (req, res) => {
    try {
        const postData = await Post.create({
            postName: req.body.name,
            postType: req.body.type,
            likes: req.body.likes
        });
        // console.log("postData", postData.id);

        if (postData) {
            await user_post.create({
                userId: req.query.userId,
                postId: postData.id
            });
        }
        // console.log("postData", postData);
        res.status(200).send(postData);
    // }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const queryPost = async (req, res) => {
    try {
        // const postData = await Post.findAll({
        // we can use literal also inplace of where 
        //     where: { [Op.and]: [
        //         { postType: "sports" },
        //         { likes: { [Op.gte]: 500 }}
        //     ]}
        // })

        // include: [] used for fetching all associated elements besides single elements
        const postData = await User.findAll({

            include: [{
                model: Post,
                through: { attributes: ["id"] }
                //             where: { postType: 'technology' } // Filtering based on post category
            }]
        })
        // console.log("postData", postData);
        res.status(200).send(postData);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const allPost = async (req, res) => {
    try {
        const allData = await Post.findAll()
        res.status(200).send(allData)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = { createPost, queryPost, allPost }