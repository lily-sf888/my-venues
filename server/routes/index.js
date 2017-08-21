const express = require('express');

const router = express.Router();

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
	res.send({ message: 'You are awesome' });
});

module.exports = router;
