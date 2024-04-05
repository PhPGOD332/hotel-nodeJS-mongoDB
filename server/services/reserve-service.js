const ReserveModel = require('../models/reserves-model');
const ClientModel = require('../models/client-model');

class ReserveService {
	async addReserve(data) {
		const contact = data.contacts;
		const dates = data.dates;
		const addInfo = data.addInfo;
		const clients = data.clients;

		let clientsResult = clients;
		const clientsIds = [];

		const existsClients = await ClientModel.find({
			name: {
				$in: {
					$and: [
						{
							name: clients.map(client => client.name)
						},
						{
							surname: clients.map(client => client.surname)
						},
						{
							patronymic: clients.map(client => client.patronymic)
						}
					]
				}
			}
		})

		if (existsClients.length) {
			clientsResult = clients.filter(client => existsClients.map(exists => !(client.name === exists.name) && !(client.surname === exists.surname) && !(client.patronymic === exists.patronymic)))
		}

		clientsResult.map(async client => {
			const newClient = await ClientModel.create({
				name: client.name,
				surname: client.surname,
				patronymic: client.patronymic,
				mail: client.mail,
				phone: client.phone
			})

			clientsIds.push(newClient._id);
		})

		const newReserve = await ReserveModel.create({
			room: data.room._id,
			clients: clientsIds,
			dateStart: dates[0],
			dateEnd: dates[1],
			contact,
			addInfo
		})
	}
}

module.exports = new ReserveService;