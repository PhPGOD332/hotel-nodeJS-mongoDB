const TagModel = require('../models/tags-model')
const RoomModel = require('../models/room-model')
const ReservesModel = require("../models/reserves-model");
class RoomService {
	async getAllRooms() {
		const rooms = await RoomModel.find().populate('tags').select('-__v');
		return rooms;
	}

	async getRoomsFiltered(dates, countGuests) {
		const totalCount = +countGuests.adults + +countGuests.children;

		const reserves = await ReservesModel.find({
			$and:[
				{ dateStart: { $lte: dates[1] } },
				{ dateEnd: { $gte: dates[0] } }
			]
		}).select('room');

		const notReservedRooms = await RoomModel.find({
			$and: [
				{
					_id: {
						$nin: reserves.map(reserve => reserve.room)
					}
				},
				{
					"parameters.maxSeats": { $gte: totalCount }
				}
			]
		}).populate('tags');

		return notReservedRooms;
	}
}

module.exports = new RoomService();