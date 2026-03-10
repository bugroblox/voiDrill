const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('void');

router.get('/', async (req, res) => {
	
	try {
		res.render('index');
	}
	catch (err) {
		res.render('error', {message: 'Error reading from MySQL'});
		console.log("Error reading from mysql");
		console.log(err);
	}
});

router.get('/login', async (req, res) =>{
    	try {
		res.render('login');
	}
	catch (err) {
		res.render('error', {message: 'Login Failed, please tell me and ill try to get to ya :3'});
		console.log("Login Fail");
		console.log(err);
	}
});

module.exports = router;