require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./router')
const path = require('path');


const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors({
	credentials: true
}))
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api', router)



async function startApp() {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
	} catch (e) {
		console.log(e.message)
	}
}

startApp();