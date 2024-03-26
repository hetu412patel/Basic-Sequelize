const { QueryTypes } = require("sequelize");
const Object = require("../model/object");
const Post = require("../model/post");
const Tag = require("../model/tag");
const User = require("../model/user");
const db = require('../db')

const createUser = async (req, res) => {
    // console.log(req.body,"body")
    try {
        const userData = await User.create({
            id: req.body.id,
            email: req.body.email,
            fullName: req.body.fullName,
            age: req.body.age,
            user123Id: req.body.user123Id
        });
        // console.log("newUser", userData);
        res.status(200).send(userData);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Object
                },
                {
                    model: Tag
                },
                {
                    model: Post,
                    through: {
                        attributes: ["id"],
                    }
                }
            ],
        });

        // console.log("allUser", userData);
        res.status(200).send(userData);
    } catch (error) {
        // console.log("errr",error);
        return res.status(500).json({ message: error.message });
    }
}

const rawQuery = async (req, res) => {
    try {
        // const queryData = await db.query(
        //     `SELECT  user123s.*, 
        //      ARRAY_AGG(DISTINCT post123s.*) AS "post123s",
        //      ARRAY_AGG(DISTINCT object123s.*) AS "object123s", 
        //      tag123s.* FROM user123s 

        //      INNER JOIN user_posts ON user123s.id = user_posts."userId" 
        //      INNER JOIN post123s ON post123s.id = user_posts."postId" 

        //      INNER JOIN object123s ON user123s.id = object123s."userId"  

        //     LEFT JOIN tag123s ON user123s.id = tag123s."userId" 

        //      GROUP BY user123s.id, tag123s.id, object123s.id`,
        //     { nest: true, type: QueryTypes.SELECT }
        // );

        // IN keyword is followed by a set of values enclosed in parentheses.
        // const queryData = await db.query(
        //     'SELECT * FROM user123s WHERE age = :age',
        //     {
        //       replacements: { age: '59' },
        //       type: QueryTypes.SELECT
        //     }

        // const queryData = await db.query(
        //     'SELECT * FROM user123s WHERE email LIKE :email',
        //     {
        //         replacements: { email: 'abc%' },
        //         type: QueryTypes.SELECT
        //     }
        // )

        // LIKE use with integer by casting them to string types with col_name::TEXT
        // const queryData = await db.query(
        //     'SELECT * FROM user123s WHERE age::TEXT LIKE :age',
        //     {
        //         replacements: { age: '59%' },
        //         type: QueryTypes.SELECT
        //     }
        // )

        const queryData = await db.query(
            'SELECT * FROM user123s WHERE id = $id',
            {
                bind: { id: '8d36ea29-28a4-4ec1-83a5-fd5c10e0d899' },
                type: QueryTypes.SELECT
            }
        );
        //   console.log("queryData",queryData);
        res.status(200).send(queryData)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    console.log("id", req.body.id);
    try {
        const userData = await User.findAll({ where: { id: req.body.id } });
        // console.log("allUser", userData);
        if (userData?.length > 0) {
            const deleteUser = await User.destroy({ where: { id: req.body.id } });
            // console.log("deleteUser", deleteUser);
        }
        res.status(200).json({ message: "delete user successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    // console.log("email", req.body.email);
    try {
        const updateUser = await User.update({ email: req.body.email }, { where: { age: 23 } });
        // console.log("updateUser", updateUser);
        res.status(200).json({ message: "user updated successfully" }).send(updateUser)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// aggregation functions : COUNT, MAX with or without order, MIN, SUM, AVG, char_length with the help of where clause , to_tsquery
const queryUser = async (req, res) => {
    const selectedUser = await User.findAll({
        attributes: ["email", "fullName"],
        // attributes: ['email', ['fullName', 'full_name'], ['age',"_age_"]],

        // The GROUP BY is necessary because of the presence of the aggrigations.
        // attributes: ['fullName', [Sequelize.fn('COUNT', Sequelize.col('email')), 'count']],
        // group: ['fullName']

        // attributes: ["age",[Sequelize.fn("MAX", Sequelize.col("age")),"maxAge"]],
        // group: ['age']

        // attributes: ["fullName",[Sequelize.fn("SUM", Sequelize.col("age")),"totalAge"]],
        // group: ['fullName']

        // limit: 1,
        // offset: 2

    });
    // console.log("selectedUser",selectedUser);
    res.status(200).send(selectedUser)
}

module.exports = { createUser, getUsers, deleteUser, updateUser, queryUser, rawQuery }