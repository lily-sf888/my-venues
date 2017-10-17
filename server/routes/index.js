const express = require('express');

const router = express.Router();

const request = require('request');

const clientId = process.env.CLIENT_ID;

const clientSecret = process.env.CLIENT_SECRET;

/**
 * Anything that needs to happen to all requests goes here
 */
router.get('/', (req, res, next) => {
	next();
});

router.get('/mylocation', (req, res) => {
	// accessing query with latitude and longitude info and storing it
	const query = req.query;
	const longLat = `${query.userLat},${query.userLng}`;
	const searchText = `${query.searchText}`;

	request.get(
		`https://api.foursquare.com/v2/venues/explore?ll=${longLat}&client_id=${clientId}&client_secret=${clientSecret}&v=20170824&query=${searchText}`,
		(err, response, body) => {
			if (err) {
				return console.error(err);
			}

			const responseData = JSON.parse(body);
			const venues = responseData.response.groups[0].items;

			res.send({ venues });
		}
	);
});

module.exports = router;
