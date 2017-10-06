import React, { Component } from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaBuilding from 'react-icons/lib/fa/building';
import MdLocationOn from 'react-icons/lib/md/location-on';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaGittip from 'react-icons/lib/fa/gittip';
import Services from '../services/venues';

// todo next fix table styling, make sure there is rating, 
// make transparent background color for table

const SearchResult = ({ venues }) => {
	const venue = venues.map((item, index) =>
		<table>
			<tr><th id="save"><FaGittip /></th><th key={index}>{item.venue.name}</th></tr>
			<tr>
				<td className="icons"><FaBuilding /></td>
				<td key={index}>{item.venue.location.address}, {item.venue.location.city}</td>
			</tr>
			<tr>
				<td className="icons"><FaStarO /></td>
				<td key={index}>{item.venue.rating}</td>
			</tr>
			<tr>
				<td className="icons"><MdLocationOn /></td>
				<td key={index}>{item.venue.stats.checkinsCount} check-ins</td>
			</tr>
			<tr>
				<td className="icons"><FaGlobe /></td>
				<td key={index}>{item.venue.url}</td>
			</tr>
		</table>
	);

	return (
		<div>
			{venue}
		</div>
	);
};

export default SearchResult;

