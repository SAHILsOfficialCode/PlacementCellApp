const mongoose = require('mongoose');

const DB = 'mongodb+srv://Sahil:GCP8q1we3kHGAA2F@cluster0.dkuhk1p.mongodb.net/Database?retryWrites=true&w=majority';


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database');
});

module.exports = mongoose;
