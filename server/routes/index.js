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
 *https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&client_id=process.env.CLIENT_ID&client_secret=process.env.CLIENT_SECRET&v=20170824&query=yoga
 *
 */
router.get('/healthcheck', (req, res) => {
	res.send({ message: 'We are healthy and good' });
});

router.get('/awesome', (req, res) => {
	request.get(
		'https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&client_id=process.env.CLIENT_ID&client_secret=process.env.CLIENT_SECRET&v=20170824&query=yoga',
		(err, response, body) => {
			if (err) {
				return console.error(err);
			}

			const responseData = JSON.parse(body);
			const dataWeWant = responseData.venue;

			res.send({ dataWeWant });
		}
	);
});

module.exports = router;
