import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import 'es6-promise/auto';
import './App.css';

import GoogleApiWrapper from './components/googlemap';


const locator = require('./images/locator.gif');

// https://developers.google.com/maps/documentation/javascript/earthquakes
// get google maps with markers

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={locator} className="App-logo" alt="heart-logo" />
					<h2>Find My Venue</h2>
				</div>

				<GoogleApiWrapper />
			</div>
		);
	}
}

export default App;
