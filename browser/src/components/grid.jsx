import React from 'react';

const Grid = () => (
	<div className="container">
		<div className="row justify-content-md-center">
			<div className="col col-lg-2">
      1 of 3
			</div>
			<div className="col-md-auto">
      Search input
			</div>
			<div className="col col-lg-2">
      3 of 3
			</div>
		</div>
		<div className="row justify-content-md-center">
			<div className="col col-lg-2">
      1 of 3
			</div>
			<div className="col-md-auto">
      Google map
			</div>
			<div className="col col-lg-2">
      3 of 3
			</div>
		</div>
		<div className="row" id="row-result">
			<div className="col-sm">col</div>
			<div className="col-sm">col</div>
			<div className="col-sm">col</div>
			<div className="col-sm">col</div>
		</div>
	</div>

);

export default Grid;
