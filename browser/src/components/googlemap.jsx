import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Services from '../services/venues';
import SearchResult from './searchResult';

const heart = require('../images/heart.gif');
const purpleHeart = require('../images/purple-heart.png');

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLat: null,
			userLng: null,
			venues: null,
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.setLocation = this.setLocation.bind(this);
	}
	componentDidMount() {
		this.getLocation();
	}

	// uses geolocation api to get current user's location
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

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleKeyPress(e) {
		if (e.key !== 'Enter') return;

		e.preventDefault();

		const searchText = this.state.value;
		const userLat = this.state.userLat;
		const userLng = this.state.userLng;

		Services.getVenues(userLat, userLng, searchText)
			.then((data) => {
				this.setState({
					venues: data.venues
				});
			});
	}


	render() {
		const userLat = this.state.userLat;
		const userLng = this.state.userLng;
		const venues = this.state.venues;

		return (

			<div className="map">
				<div className="search">
					<form>
						<input
							type="text"
							name="search"
							placeholder="Search..."
							value={this.state.value}
							onChange={this.handleChange}
							onKeyPress={this.handleKeyPress}
						/>
					</form>
				</div>
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
								anchor: new this.props.google.maps.Point(22, 22),
								scaledSize: new this.props.google.maps.Size(22, 22)
							}}
						/>
						{venues &&
							venues.map((item, index) => {
								const lat = item.venue.location.lat;
								const lng = item.venue.location.lng;
								const key = index;

								return (
									<Marker
										position={{ lat, lng }}
										key={key}
										icon={{
											url: purpleHeart,
											anchor: new this.props.google.maps.Point(20, 20),
											scaledSize: new this.props.google.maps.Size(20, 20)
										}}
									/>
								);
							})}
					</Map>
				)}
				{venues &&
					<div id="search-result"><SearchResult
						venues={venues}
					/>
					</div>
				}
			</div>


		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA_faOQ3ONYRF9VJqjLrgOVoKaDtbyhn54'
})(MapContainer);
