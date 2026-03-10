const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('databaseAccessLayer');

router.get('/', async (req, res) => {
	console.log("page hit");
	
	try {
		res.render('index');
	}
	catch (err) {
		res.render('error', {message: 'Error reading from MySQL'});
		console.log("Error reading from mysql");
		console.log(err);
	}
});

module.exports = router;