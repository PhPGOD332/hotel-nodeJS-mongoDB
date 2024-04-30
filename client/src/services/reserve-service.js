import $api from "../http";

class ReserveService {
    static async addReserve(params) {
        return await $api.post('api/reserves/addReserve', {params});
    }

    static async getReservesByDates(dates) {
        const params = { ...dates };
        return await $api.get('api/reserves/reservesByDates', {params});
    }
}

export default ReserveService;