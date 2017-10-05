import React, { Component } from 'react';
import Services from '../services/venues';

export default class SearchResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			venues: null
		};
	}

	componentDidMount() {

	}

	render() {
		return (
			<tr />
		);
	}
}

// const SearchResult = ({ venues }) => {
// 	const name = venues.map((item, index) =>
// 		<span key={index}>{item.venue.name}</span>
// 	);

// 	return (
// 		<div>
// 			{name}
// 		</div>
// 	);
// };

// export default SearchResult;

