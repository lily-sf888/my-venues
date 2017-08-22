const express = require('express');

const router = express.Router();

const request = require('request');

/**
 * Anything that needs to happen to all requests goes here
 */
router.get('/', (req, res, next) => {
	next();
});

/**
 * Base routes
 *
 */
router.get('/healthcheck', (req, res) => {
	res.send({ message: 'We are healthy and good' });
});

router.get('/awesome', (req, res) => {
	request.get(
		'http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&appid=05cb91f4ff2e4ea4f2ff78e2a59d0dbe',
		(err, response, body) => {
			console.log('hello!!');
			if (err) {
				return console.error(err);
			}

			console.log('new body', body);
			const responseData = JSON.parse(body);
			const dataWeWant = responseData.responseData;

			res.send({ dataWeWant });
		}
	);
});

module.exports = router;
