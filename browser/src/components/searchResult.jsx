import React, { Component } from 'react';
import Services from '../services/venues';


const SearchResult = ({ venues }) => {
	const name = venues.map((item, index) =>
		<td key={index}>{item.venue.name}</td>
	);

	return (
		<table>
			<tbody>
				{name}
			</tbody>
		</table>
	);
};

export default SearchResult;

