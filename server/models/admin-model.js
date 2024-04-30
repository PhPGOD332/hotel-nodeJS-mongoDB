const {Schema, model} = require('mongoose');

const AdminSchema = new Schema({
	login: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	role: {type: String, required: true, default: 'adminDB'}
})

module.exports = model('Admin', AdminSchema, 'admins');