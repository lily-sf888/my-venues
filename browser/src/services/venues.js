/**
 * @param  {number} lat: latitude of center location
 * @param  {number} lng: longitude of center location
 * @param  {string} searchTerm: term to search for matching venues
 * @return {promise}
 */
import fetch from 'isomorphic-fetch';
import 'es6-promise/auto';

const getVenues = (userLat, userLng, searchText) => {
	const url = `/mylocation?userLat=${userLat}&userLng=${userLng}&searchText=${searchText}`;

	// fetch for getting foursquare data
	return fetch(url)
		.then((response) => {
			if (response.status >= 400) {
				// throw new Error('Bad response from server');
			}

			return response.json();
		});
};

export default {
	getVenues
};
