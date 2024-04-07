import $api from "../../http";

export default class clientService {
	static async getAllClients() {
		return $api.get('clients');
	}

	static async addClient(data) {
		return $api.post('clients/addClient', {data});
	}

	static async removeClient(id) {
		return $api.post('clients/deleteClient', {id});
	}
}