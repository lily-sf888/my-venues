import React from 'react';
import './App.css';

import GoogleApiWrapper from './components/googlemap';

const locator = require('./images/purple-locator.png');

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={locator} className="App-logo" alt="locator-logo" />
			<h2>Find My Venue</h2>
		</div>
		<GoogleApiWrapper />
	</div>
);

export default App;
