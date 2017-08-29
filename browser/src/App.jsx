import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import 'es6-promise/auto';
import './App.css';
import logo from './logo.svg';
import GoogleApiWrapper from './components/googlemap';

// https://developers.google.com/maps/documentation/javascript/earthquakes
// get google maps with markers

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		fetch('/awesome')
			.then(response => {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				}
				return response;
			})
			.then(data => {
				console.log('new data', data);
			});

		fetch('/awesome')
			.then(response => {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				}
				return response;
			})
			.then(data => {
				console.log('new data', data);
			});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<GoogleApiWrapper />
			</div>
		);
	}
}

export default App;
