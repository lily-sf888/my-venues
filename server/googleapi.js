const apiKey = process.env.API_KEY;

const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
});

googleMapsClient.geocode(
	{
		address: '1600 Amphitheatre Parkway, Mountain View, CA'
	},
	(err, response) => {
		if (err) {
			return console.log(err);
		}
		return console.log(response);
	}
);
