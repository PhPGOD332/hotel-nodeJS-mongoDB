const {Schema, model} = require('mongoose');

const TagSchema = new Schema({
	icon: {type: String, required: true},
	name: {type: String, required: true}
})

module.exports = model('Tag', TagSchema);