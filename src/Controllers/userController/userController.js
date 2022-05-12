const Models  =require("../../models");

/**
 * @description this function for the list of users.
 * @param req
 * @param res
 */
module.exports.getListOfUsers = async (req, res) => {
    try {
        const data = await Models.User.findAll();
        res.send({
            data,
        });

    } catch (e) {
        res.send({
            data: null,
            message: "Something went wrong."
        });
    }
};


/**
 * @description this function for get user from the userId.
 * @param req
 * @param res
 */
module.exports.getUserDataFromId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = await Models.User.findOne({
            where: {
                id,
            }
        });
        if(!data) {
            return res.status(404).send({
                data,
                message: "User with given id does not exist"
            });
        }
        res.send({
            data,
            message: "Success"
        });
    } catch (e) {
        res.send({
            data: null,
            message: "Something went wrong."
        });
    }
};




/**
 * @description this function for delete particular user.
 * @param req
 * @param res
 */
module.exports.deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await Models.User.destroy({
            where: {
                id,
            }
        });
        res.send({
            message: "User removed successfully."
        });
    } catch (e) {
        res.send({
            data: null,
            message: "Something went wrong."
        });
    }
};



/**
 * @description For the create user.
 * @param req
 * @param res
 */
module.exports.createUser = async (req, res) => {
    try {
        const {name} = req.body;
        const data = await Models.User.create({name});
        res.send({
            data,
            message: "Success"
        });

    } catch (e) {
        res.send({
            data: null,
            message: "Something went wrong."
        });
    }
};
