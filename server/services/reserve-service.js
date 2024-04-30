const ReserveModel = require('../models/reserves-model');
const ClientModel = require('../models/client-model');
const ReservesModel = require("../models/reserves-model");

class ReserveService {
	async addReserve(data) {
		try {
			const contact = data.params.contacts;
			const dates = data.params.postDatesFormat;
			const addInfo = data.params.addInfo;
			const clients = data.params.guestsInfo;
			const room = data.params.chosenRoom;
			const price = data.params.totalPrice;
			const passSerial = clients[0].passSerial;
			const passNumber = clients[0].passNumber;

			let countFullClients = 0;

			for (const client of clients) {
				if (client.name && client.surname && client.patronymic) {
					countFullClients++;
				}
			}
			if (countFullClients === 0) {
				return 'Введите полностью данные хотя бы по одному гостю.'
			}

			if ((passSerial.length < 4 || passSerial.length > 4) || (passNumber.length < 6 || passNumber.length > 6)) {
				return 'Введите паспортные данные корректно!';
			}

			if (!contact.name || !contact.surname || !contact.patronymic) {
				return 'Введите полностью ФИО контакта!'
			}

			if (!contact.mail || !contact.phone) {
				return 'Введите хотя бы один способ связи!'
			}

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
						phone: client.phone,
						passSerial: client.passSerial,
						passNumber: client.passNumber
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
				clientsIds.push(newClient[0]._id);
			}

			const newReserve = await ReserveModel.create({
				room: room._id,
				clients: clientsIds,
				dateStart: dates[0],
				dateEnd: dates[1],
				contact,
				addInfo,
				price
			})

			if (newReserve) {
				return 'Бронь успешно создана! Не забудьте взять с собой паспорт!';
			}
		} catch (e) {
			return e.message;
		}
	}

	async getReservesByDates(dates) {
		const reserves = await ReservesModel.find({
			dateStart: { $gte: dates.dateStart }
		}).populate('room');

		for (const reserve of reserves) {
			const clients = reserve.clients;

			const clientsInfo = await ClientModel.find({
				_id: { $in: clients }
			})

			reserve.clients = clientsInfo;
		}

		return reserves;
	}
}

module.exports = new ReserveService;