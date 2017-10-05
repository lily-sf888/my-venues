import React, { Component } from 'react';
import Services from '../services/venues';


const SearchResult = ({ venues }) => {
	const venue = venues.map((item, index) =>
		<table>
			<tr><td key={index}>{item.venue.name}</td></tr>
			<tr><td key={index}>{item.venue.location.address}</td></tr>
		</table>
	);

	return (
		<div>
			{venue}
		</div>
	);
};

export default SearchResult;

