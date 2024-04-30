const ClientService = require('../services/client-service');
class ClientsController {
	async getAllClients(req, res, next) {
		try {
			const clients = await ClientService.getAllClients();
			return res.json(clients);
		} catch(e) {
		    console.error(e)
		}
	}

	async addClient(req, res, next) {
		try {
			const data = req.body.data;

			if (Object.values(data).some(val => val !== '') === false) {
				return res.json('Заполните данные!');
			}
			if (!data.name || !data.surname || !data.patronymic) {
				return res.json('Заполните полностью ФИО!');
			}
			if (!data.mail && !data.phone) {
				return res.json('Заполните хотя бы один из контактных данных!');
			}

			const newClient = await ClientService.addClient(data);
			return res.json(newClient)
		} catch(e) {
		    console.error(e)
		}
	}

	async removeClient(req, res, next) {
		try {
			const {id} = req.body;
			const removedClient = await ClientService.removeClient(id);
			return res.json(removedClient);
		} catch(e) {
		    console.error(e)
		}
	}

	async editClient(req, res, next) {
		try {
			const {data} = req.body;

			if (Object.values(data).some(val => val !== '') === false) {
				return res.json('Заполните данные!');
			}
			if (!data.name || !data.surname || !data.patronymic) {
				return res.json('Заполните полностью ФИО!');
			}
			if (!data.mail && !data.phone) {
				return res.json('Заполните хотя бы один из контактных данных!');
			}

			const editedClient = await ClientService.editClient(data);
			return res.json(editedClient);
		} catch(e) {
			console.error(e)
		}
	}
}

module.exports = new ClientsController;