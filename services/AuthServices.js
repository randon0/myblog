const Users = require('../models/UsersSchema');
const bcrypt = require("bcrypt");

class AuthServices {
    async registerUserService(fullName, accountName, password) {
        const userExist = await Users.findOne({ accountName });
        if (userExist) {
            throw { status: 400, message: "Email or accountName already taken" };  
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            fullName,
            accountName,
            password: hashedPassword,
        });

        await newUser.save(); // Save the new user to the database

        return { success: true, message: "User created successfully" };
    }
    //login
}

module.exports = new AuthServices();
