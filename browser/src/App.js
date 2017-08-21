import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import 'es6-promise/auto';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		fetch(
			'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=TQBSYR0VMSRQMZKUI5ENGVL3FRIAJI4N2DNKDOYUGABETF10&client_secret=FEHBEA22GU34DGOKLQKB1533ITMXQN5QTZK2VWTVQQZI2LBP&v=20170821'
		)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				}
				return response.json();
			})
			.then((data) => {
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
			</div>
		);
	}
}

export default App;
