const User = require("../model/user")

const allSelfData = async (req, res) => {
    console.log("...");
    try {
        console.log(",,,,");
        const data = await User.findAll({
            include: [{
                model: User,
                as: "Parent",
            }],
        })
        console.log("data",data);
        res.status(200).json({message: "user created", data: data})
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {allSelfData}