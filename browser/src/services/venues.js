/**
 * @param  {number} lat: latitude of center location
 * @param  {number} lng: longitude of center location
 * @param  {string} searchTerm: term to search for matching venues
 * @return {promise}
 */
const getVenues = (userLat, userLng) =>

	// fetch for getting foursquare data
	fetch('/mylocation')
		.then((response) => {
			if (response.status >= 400) {
				// throw new Error('Bad response from server');
			}

			return response.json();
		});
export default {
	getVenues
};
