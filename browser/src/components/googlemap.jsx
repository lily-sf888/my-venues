import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// get user's current position with HTML Geolocation
// let userLat;
// let userLng;

// const showPosition = position => {
// 	userLat = position.coords.latitude;
// 	userLng = position.coords.longitude;
// 	console.log(userLat, userLng);
// };

// const getLocation = () => {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(showPosition);
// 	} else {
// 		console.log('Geolocation is not supported by this browser');
// 	}
// };

export class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userLat: null,
			userLng: null
		};

		this.getLocation = this.getLocation.bind(this);
		this.setLocation = this.setLocation.bind(this);
	}
	componentDidMount() {
		this.getLocation();
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

	render() {
		const userLat = this.state.userLat;
		const userLng = this.state.userLng;

		return {
			userLat: userLng ? (
				<Map
					google={this.props.google}
					style={{ height: '50%', width: '50%' }}
					zoom={8}
					initialCenter={{
						lat: { userLat },
						lng: { userLng }
					}}
				>
					<Marker name={'current location'} position={{ lat: 37.778519, lng: -122.40564 }} />
					<Marker name={'Dolores park'} position={{ lat: 37.759703, lng: -122.428093 }} />
				</Map>
			) : (
				<div>Loading...</div>
			)
		};
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
})(MapContainer);
