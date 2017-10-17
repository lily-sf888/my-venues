import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Services from '../services/venues';
import SearchResult from './searchResult';

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
		if (position) {
			this.setState(() => ({
				userLat: position.coords.latitude,
				userLng: position.coords.longitude
			}));
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	// when user hits enter in the search field, we call getVenues and bring back the data from
	// foursquare and set them in state
	handleKeyPress(e) {
		if (e.key !== 'Enter') return;

		e.preventDefault();

		this.setState({
			value: ''
		});

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
			<div>
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
				<div className="map">
					{userLat && (
						<Map
							google={this.props.google}
							zoom={12}
							style={{ height: '62%', width: '62%' }}
							initialCenter={{
								lat: userLat,
								lng: userLng
							}}
						>
							<Marker
								name={'User location'}
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
									/>
								);
							})}
						</Map>
					)}
				</div>
				{venues &&
					<div id="search-result">
						<SearchResult
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
