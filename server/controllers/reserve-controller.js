const ReserveService =  require("../services/reserve-service");

class ReserveController {
	async addReserve(req, res, next) {
		try {
			const data = req.body;
			const reserveData = await ReserveService.addReserve(data);
			return res.json(reserveData);
		} catch(e) {
		    return res.json(e.message);
		}
	}

	async getReservesByDates(req, res, next) {
		try {
			let dates = req.query;
			// dates = { dateStart: new Date(dates.dateStart), dateEnd: new Date(dates.dateEnd) }
			const reserves = await ReserveService.getReservesByDates(dates);
			return res.json(reserves);
		} catch (e) {
			return res.json(e.message);
		}
	}
}

module.exports = new ReserveController;