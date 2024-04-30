const AdminService = require('../services/admin-service');

class AdminController {
    async checkAuth(req, res, next) {
        let data = req.query;
        const checked = await
            AdminService.checkAuth(data);
        return res.json(checked);
    }
}

module.exports = new AdminController;