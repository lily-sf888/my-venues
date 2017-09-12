import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const heart = require('../images/heart.gif');

export class MapContainer extends Component {
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
								anchor: new this.props.google.maps.Point(32, 32),
								scaledSize: new this.props.google.maps.Size(32, 32)
							}}
						/>
					</Map>
				)}
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
})(MapContainer);
