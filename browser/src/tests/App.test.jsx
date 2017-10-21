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

// feed array of objects
it('SearchResult renders', () => {
	const div = document.createElement('div');
	const mockVenues = [
		{
			venue: {
				name: 'dong',
				location: {
					city: 'san fran'
				},
				stats: {
					checkinsCount: 4
				},
				url: 'http://blah.com'
			}
		}
	];
	ReactDOM.render(<SearchResult
		venues={mockVenues}
	/>, div);
});
