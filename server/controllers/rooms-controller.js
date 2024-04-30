const RoomService = require('../services/room-service');

class RoomsController {
	async getAllRooms(req, res, next) {
		try {
			const rooms = await RoomService.getAllRooms();
			return res.json(rooms);
		} catch (e) {
			console.error(e.message)
		}
	}

	async getRoomsFiltered(req, res, next) {
		try {
			const {dates, countGuests} = req.query;
			const rooms = await RoomService.getRoomsFiltered(dates, countGuests);
			return res.json(rooms);
		} catch(e) {
		    console.error(e)
		}
	}
}

module.exports = new RoomsController;