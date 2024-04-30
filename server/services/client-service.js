const ClientModel = require('../models/client-model');
const {ObjectId} = require("mongodb");

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
				await ClientModel.create(data);
				return 'Клиент успешно создан'
			} else {
				return 'Такой клиент уже существует';
			}
		} catch(e) {
		    return e.message;
		}
	}

	async removeClient(id) {
		try {
			const clientWithId = await ClientModel.find({
				_id: id
			})

			if(!clientWithId.length) {
				return 'Такого клиента не существует в БД!'
			}

			const removedClient = await ClientModel.deleteOne({
				_id: id
			});

			if (removedClient.deletedCount = 0) {
				return 'Не удалось удалить клиента';
			}

			return 'Клиент успешно удален.';
		} catch (e) {
			return e.message;
		}
	}

	async editClient(data) {
		try	{
			const editedClient = await ClientModel.findOneAndUpdate({
				_id: data._id
			},
				{
					name: data.name,
					surname: data.surname,
					patronymic: data.patronymic,
					mail: data.mail,
					phone: data.phone,
					passSerial: data.passSerial,
					passNumber: data.passNumber
				}, {
				new: true
				})

			if (!editedClient) {
				return 'Произошла ошибка при изменении записи!';
			}

			return 'Запись успешно изменена.';
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = new ClientService;