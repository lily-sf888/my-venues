import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import 'es6-promise/auto';
import './App.css';

import GoogleApiWrapper from './components/googlemap';
import SearchBox from './components/searchbox';

const heart = require('./images/heart.gif');

// https://developers.google.com/maps/documentation/javascript/earthquakes
// get google maps with markers

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={heart} className="App-logo" alt="heart-logo" />
					<h2>Find My Venue</h2>
				</div>
				<SearchBox />
				<GoogleApiWrapper />
			</div>
		);
	}
}

export default App;
