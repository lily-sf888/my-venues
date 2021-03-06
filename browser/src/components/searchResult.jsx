import React from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaBuilding from 'react-icons/lib/fa/building';
import MdLocationOn from 'react-icons/lib/md/location-on';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaGittip from 'react-icons/lib/fa/gittip';

const SearchResult = ({ venues }) => {
	const venue = venues.map(item =>
		<div className="col-sm-3">
			<div className="d-inline save"><FaGittip /></div>
			<div className="d-inline font-weight-bold">{item.venue.name}</div><br />
			<div className="d-inline"><FaBuilding /></div>
			<div className="d-inline">{item.venue.location.address}, {item.venue.location.city}</div><br />
			<div className="d-inline"><FaStarO /></div>
			<div className="d-inline">{item.venue.rating}</div><br />
			<div className="d-inline"><MdLocationOn /></div>
			<div className="d-inline">{item.venue.stats.checkinsCount} check-ins</div><br />
			<div className="d-inline"><FaGlobe /></div>
			<div className="d-inline"><a href={item.venue.url} target="_blank">website</a></div>
		</div>
	);

	return (
		<div className="container">
			<div className="row">
				{venue}
			</div>
		</div>
	);
};

export default SearchResult;

