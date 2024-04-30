import $api from "../http";

export default class clientService {
	static async getAllClients() {
		return $api.get('api/clients');
	}

	static async addClient(data) {
		return $api.post('api/clients/addClient', {data});
	}

	static async removeClient(id) {
		return $api.delete('api/clients/removeClient', {data: {id: id}});
	}

	static async editClient(data) {
		return $api.post('api/clients/editClient', {data});
	}
}