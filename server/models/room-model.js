const {Schema, model} = require('mongoose');

const RoomSchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	isRented: {type: Boolean, required: true},
	tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
	price: {type: Number, required: true},
	parameters: [{type: Object}]
})

module.exports = model('Room', RoomSchema);