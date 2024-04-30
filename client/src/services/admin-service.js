import $api from "../http";

class AdminService {
    static async checkAdmin(data) {
        const params = data;
        const response = await $api.get('api/adminCheck', {
            params
        });
        return response;
    }
}

export default AdminService;