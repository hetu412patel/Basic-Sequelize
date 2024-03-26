const { where, Sequelize, Op } = require("sequelize");
const Object = require("../model/object");
const User = require("../model/user");

const createObject = async (req, res) => {
    const price = req.body.price
    const totalCount = req.body.totalCount

    const remainingCount = Math.floor(totalCount / price)

    try {
        const objectCreate = await Object.create({
            userId: req.body.userId,
            objectName: req.body.name,
            price: price,
            totalCount: totalCount,
            remainingCount: remainingCount
        });
        // console.log("objectCreate", objectCreate);
        res.status(200).send(objectCreate);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const allObjects = async (req, res) => {
    try {
        const userObject = await Object.findAll();
        // console.log("userObject", userObject);
        res.status(200).send(userObject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const queryObjects = async (req, res) => {
    try {
        const userObject = await User.findAll({
            attributes:['fullName'],
            include:[
               { model: Object,
                // attributes:['objectName'],
                where: {
                    [Op.and] : [{objectName:"mobile"},{price: "120"}]}
            }
            ]
        });
        // console.log("queryObjects", userObject);
        res.status(200).send(userObject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const specificObject = async (req, res) => {
    try {
        const userObject = await Object.findAll({where : {userId : req.body.id}});
        // console.log("userObject", userObject);
        res.status(200).send(userObject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteObject = async (req, res) => {
    try {
        const deleted = await Object.destroy({where : {userId : req.body.id}})
        // console.log("deleted", deleted);
        res.status(200).send(deleted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateObject = async(req,res) => {
    try {
        const updated = await Object.update({ price: req.body.price }, { where: { objectName: "mobile", userId: "292b05bc-8b7c-44f1-9d37-b58c0c80bfef" } });
        // console.log("updated", updated);
        res.status(200).json({ message: "object updated successfully" }).send(updated)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { createObject, allObjects, specificObject, deleteObject, queryObjects, updateObject }