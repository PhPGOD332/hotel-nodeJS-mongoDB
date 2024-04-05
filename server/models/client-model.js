const {Schema, model} = require('mongoose');

const ClientSchema = new Schema({
	name: {type: String, required: true},
	surname: {type: String, required: true},
	patronymic: {type: String, required: true},
	mail: {type: String},
	phone: {type: String}
})

module.exports = model('Client', ClientSchema);