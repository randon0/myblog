const AuthServices = require('../services/AuthServices');

class AuthControllers {
    async registerUserController(req, res) {
        const { fullName, accountName, password } = req.body;
        
        if (!fullName || !accountName || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Missing fullName, accountName, or password" });
        }

        try {
            const result = await AuthServices.registerUserService(fullName, accountName, password);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(error.status || 500).json({ success: false, message: error.message || "Internal Server Error" });
        }
    }
    //logincontroller
}

module.exports = new AuthControllers(); // Export an instance of AuthControllers
