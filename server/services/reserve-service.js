const ReserveModel = require('../models/reserves-model');
const ClientModel = require('../models/client-model');

class ReserveService {
	async addReserve(data) {
		// console.log(data)
		const contact = data.params.contacts;
		const dates = data.params.postDatesFormat;
		const addInfo = data.params.addInfo;
		const clients = data.params.guestsInfo;
		const room = data.params.chosenRoom;
		// console.log(clients)

		let clientsResult = [];
		const clientsIds = [];
		const existsClients = [];

		for(const client of clients) {
			const existsClient = await ClientModel.find({
				$and: [
					{
						name: {
							$eq: client.name ? client.name : true
						}
					},
					{
						surname: {
							$eq: client.surname ? client.surname : true
						}
					},
					{
						patronymic: {
							$eq: client.patronymic ? client.patronymic : true
						}
					},
				]
			})

			if (existsClient.length > 0) {
				existsClients.push(existsClient[0]);
			}
		}

		if (existsClients.length !== clients.length && existsClients.length < clients.length) {
			clientsResult = clients.filter(client => {
				return existsClients.length ? existsClients.some(exists =>
					!(client.name === exists.name ? exists.name : false) &&
					!(client.surname === exists.surname ? exists.surname : false) &&
					!(client.patronymic === exists.patronymic ? exists.patronymic : false))
					:
					client
			})

			for(const client of clientsResult) {
				const clientAdd = await ClientModel.create({
					name: client.name,
					surname: client.surname,
					patronymic: client.patronymic,
					mail: client.mail,
					phone: client.phone
				})
			}
		}

		for(const client of clients) {
			const newClient = await ClientModel.find({
				$and: [
					{
						name: { $eq: client.name }
					},
					{
						surname: { $eq: client.surname }
					},
					{
						patronymic: { $eq: client.patronymic }
					},
				]
			}).select('_id')
			console.log(newClient)
			clientsIds.push(newClient[0]._id);
		}

		const newReserve = await ReserveModel.create({
			room: room._id,
			clients: clientsIds,
			dateStart: dates[0],
			dateEnd: dates[1],
			contact,
			addInfo
		})
	}
}

module.exports = new ReserveService;