import React, { Component } from 'react';
import Services from '../services/venues';


const SearchResult = ({ venues }) => {
	const venue = venues.map((item, index) =>
		<table>
			<tr><td key={index}>{item.venue.name}</td></tr>
			<tr><td key={index}>{item.venue.location.address}, {item.venue.location.city}</td></tr>
			<tr><td key={index}>{item.venue.rating}</td></tr>
			<tr><td key={index}>{item.venue.stats.checkinsCount}</td></tr>
			<tr><td key={index}>{item.venue.url}</td></tr>
		</table>
	);

	return (
		<div>
			{venue}
		</div>
	);
};

export default SearchResult;

