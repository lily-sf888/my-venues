import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// get user's current position with HTML Geolocation
// const showPosition = (position) => {
// 	const userLat = position.coords.latitude;
// 	const userLng = position.coords.longitude;
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
		this.showPosition = this.showPosition.bind(this);
	}

	componentWillMount() {
		getLocation();
	}

	getLocation() {
		if (this.navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log('Geolocation is not supported by this browser');
		}
	}

	showPosition() {
		const userLat = this.position.coords.latitude;
		const userLng = this.position.coords.longitude;

		this.setState({
			userLat,
			userLng
		});
	}

	render() {
		console.log('userLat', this.state.userLat);
		return (
			<Map
				google={this.props.google}
				style={{ height: '50%', width: '50%' }}
				zoom={8}
				initialCenter={{
					lat: this.state.userLat,
					lng: this.state.userLng
				}}
			>
				<Marker name={'current location'} position={{ lat: 37.778519, lng: -122.40564 }} />
				<Marker name={'Dolores park'} position={{ lat: 37.759703, lng: -122.428093 }} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
})(MapContainer);
