import React, { Component } from 'react';
import Services from '../services/venues';


const SearchResult = ({ venues }) => {
	const name = venues.map((item, index) =>
		<span key={index}>{item.venue.name}</span>
	);

	return (
		<div>
			{name}
		</div>
	);
};

export default SearchResult;

