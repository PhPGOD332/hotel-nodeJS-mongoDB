const ReserveService =  require("../services/reserve-service");

class ReserveController {
	async addReserve(req, res, next) {
		try {
			const data = req.body;
			const reserveData = await ReserveService.addReserve(data);
			return res.json(reserveData);
		} catch(e) {
		    console.error(e)
		}
	}
}

module.exports = new ReserveController;