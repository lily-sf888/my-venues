import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
import GoogleApiWrapper from '../components/googlemap';
import SearchResult from '../components/searchResult';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('GoogleApiWrapper renders', () => {
	const div = document.createElement('div');
	const mockVenue = {
		name: 'testName'
	};
	ReactDOM.render(<GoogleApiWrapper
		name={mockVenue}
	/>, div);
});

it('SearchResult renders', () => {
	const div = document.createElement('div');
	const mockVenue = {
		name: 'testName'
	};
	ReactDOM.render(<SearchResult
		name={mockVenue}
	/>, div);
});
