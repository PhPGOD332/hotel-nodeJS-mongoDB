const AdminModel = require('../models/admin-model');
const bcrypt = require('bcrypt');

class AdminService {
    async checkAuth({login, pass}) {
        try {
            const checkLogin = await AdminModel.findOne({login});

            if (!checkLogin) {
                return false;
            }

            const validPass = bcrypt.compareSync(pass, checkLogin.password);

            if (!validPass) {
                return false;
            }

            return checkLogin.role;
        } catch(e) {
            return e.message;
        }
    }
}

module.exports = new AdminService();