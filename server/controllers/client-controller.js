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
			const newClient = await ClientService.addClient(data);
			return res.json(newClient)
		} catch(e) {
		    console.error(e)
		}
	}

	async remove(req, res, next) {
		try {
			const id = req.body;
			const removedClient = await ClientService.removeClient(id);
		} catch(e) {
		    console.error(e)
		}
	}
}

module.exports = new ClientsController;