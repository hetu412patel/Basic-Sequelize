const { Op } = require('sequelize');
const Tag = require('../model/tag');
const User = require('../model/user');

const createTag = async (req, res) => {
    try {
        const tagData = await Tag.create({
            tagName: req.body.name,
            userId: req.body.id
        });
        // console.log("tagData", tagData);
        res.status(200).send(tagData);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAllTag = async (req, res) => {
    try {
        const allTag = await Tag.findAll();
        // console.log("allTag", allTag);
        res.status(200).send(allTag);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const queryTag = async(req, res) => {
    try {
        const selectedTag = await User.findAll({
            attributes: ["fullName", "age"],
            include: [
                {
                  model: Tag,
                  where: {
                    // tagName: 'test',
                    createdAt: {
                        [Op.between] : ["2024-03-18", "2024-03-20"]
                    }
                  }
                }
              ]
        })
        res.status(200).send(selectedTag)
    } catch (error) {
        return res.status(500).send({message : error?.message})
    }
}

const updateTag = async (req, res) => {
    try {
        // find users who contain tag
        // const users = await Tag.findAll({
        //     include: [{
        //         model: User
        //     }]
        // })
        // console.log("....", users);
        const updated = await Tag.update({ tagName: req.body.name }, { where: { userId: "292b05bc-8b7c-44f1-9d37-b58c0c80bfef" } });
        // console.log("updated", updated);
        res.status(200).json({ message: "object updated successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteTag = async (req, res) => {
    try {
        const deleted = await Tag.destroy({ where: { id: req.body.id } });
        // console.log("deleted", deleted);
        res.status(200).json({ message: "delete tag successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { createTag, getAllTag, deleteTag, updateTag, queryTag }