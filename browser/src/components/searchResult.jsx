import React from 'react';

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

export default SearchResult
;
