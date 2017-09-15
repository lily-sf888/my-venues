import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const heart = require('../images/heart.gif');
const purpleHeart = require('../images/purple-heart.png');

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLat: null,
			userLng: null,
			venues: null
		};

		this.getLocation = this.getLocation.bind(this);
		this.setLocation = this.setLocation.bind(this);
		this.getResults = this.getResults.bind(this);
	}
	componentDidMount() {
		this.getLocation();

		// fetch for getting foursquare data
		fetch('/mylocation')
			.then(response => {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				}
				return response.json();
			})
			.then(data =>
				// call method that needs this data
				this.getResults(data)
			)
			.catch(err => {
				console.log(err);
			});
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.setLocation);
		} else {
			console.log('Geolocation is not supported by this browser');
		}
	}

	setLocation(position) {
		this.setState(() => ({
			userLat: position.coords.latitude,
			userLng: position.coords.longitude
		}));
	}

	getResults(data) {
		console.log(data.venues);

		this.setState(() => ({
			venues: data.venues
		}));
	}

	render() {
		const userLat = this.state.userLat;
		const userLng = this.state.userLng;

		const venues = this.state.venues;

		return (
			<div className="map">
				{userLat && (
					<Map
						google={this.props.google}
						zoom={12}
						style={{ height: '50%', width: '50%' }}
						initialCenter={{
							lat: userLat,
							lng: userLng
						}}
					>
						<Marker
							name={'User location'}
							icon={{
								url: heart,
								anchor: new this.props.google.maps.Point(20, 20),
								scaledSize: new this.props.google.maps.Size(20, 20)
							}}
						/>

						{venues.map((item, index) => {
							const lat = item.venue.location.lat;
							const lng = item.venue.location.lng;

							return <Marker position={{ lat, lng }} key={index} />;
						})}
					</Map>
				)}
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
})(MapContainer);
