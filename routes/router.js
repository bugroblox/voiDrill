const express = require('express');
const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('void');
const app = express();

router.get('/', async (req, res) => {
	
	try {
		res.render('title');
	}
	catch (err) {
		res.render('error', {message: 'Error reading from MySQL'});
		console.log("Error reading from mysql");
		console.log(err);
	}
});


router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = db.users.get_byUsername(username);

  if (!user) {
    return res.render('login', { error: 'Invalid username or password' });
  }

  const match = await bcrypt.compare(password, user.password_hash);

  if (!match) {
    return res.render('login', { error: 'Invalid username or password' });
  }

  req.session.userId = user.id;

  res.redirect('/voiDrill');
});

module.exports = router;