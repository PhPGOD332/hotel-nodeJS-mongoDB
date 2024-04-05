const {Schema, model} = require('mongoose');

const ReservesSchema = new Schema({
	room: {type: Schema.Types.ObjectId, ref: 'Room', required: true},
	clients: [{type: Schema.Types.ObjectId, ref: 'Client', required: true}],
	dateStart: {type: Date, required: true},
	dateEnd: {type: Date, required: true},
	// sumPrice: {type: String, required: true},
	contact: {type: Object, required: true},
	addInfo: {type: String}
})

module.exports = model('Reserve', ReservesSchema);