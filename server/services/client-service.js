const ClientModel = require('../models/client-model');

class ClientService {
	async getAllClients() {
		const clients = await ClientModel.find().select('-__v');
		return clients;
	}

	async addClient(data) {
		try {
			const similarClients = await ClientModel.find({
				$and: [
					{
						surname: { $eq: data.surname }
					},
					{
						name: { $eq: data.name }
					},
					{
						patronymic: { $eq: data.patronymic }
					},
					{
						$or: [
							{
								mail: { $eq: data.mail }
							},
							{
								phone: { $eq: data.phone }
							}
						]
					}
				]
			})

			if(!similarClients.length) {
				await ClientModel.create(data)
				return 'Клиент успешно создан'
			} else {
				return 'Такой клиент уже существует';
			}
		} catch(e) {
		    return e.message;
		}
	}

	async removeClient(id) {
		const removedClient = await ClientModel.deleteOne(id)
		return removedClient;
	}
}

module.exports = new ClientService;