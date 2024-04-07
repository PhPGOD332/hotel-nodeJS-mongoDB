const {Schema, model} = require('mongoose');

const ClientSchema = new Schema({
	name: {type: String, required: true},
	surname: {type: String, required: true},
	patronymic: {type: String, required: true},
	phone: {type: String, default: ''},
	mail: {type: String, default: ''}
})

module.exports = model('Client', ClientSchema, 'clients');