import React, { Component } from "react";
import * as Constants from "../constants";

import "./SearchRankAlgorithm.scss";

let classNames = require("classnames");

class SearchRankAlgorithm extends Component {
	render() {
		let defaultAlgoBtnClass = classNames({
			"option-select": true,
			selected: this.props.searchAlgorithm === Constants.SEARCH_ALGO_DEFAULT
		});

		let pageRankAlgoBtnClass = classNames({
			"option-select": true,
			selected: this.props.searchAlgorithm === Constants.SEARCH_ALGO_PAGERANK
		});

		return (
			<div className="search-rank-algorithm-wrapper">
				<label className="search-algorithm-label">Search Algorithm</label>
				<div
					id="option-default"
					className={defaultAlgoBtnClass}
					onClick={e =>
						this.props.handleSearchAlgorithmChange(
							Constants.SEARCH_ALGO_DEFAULT
						)
					}
				>
					<label>Lucene</label>
					<div className="indicator-wrapper">
						<span className="circle show-on-selected" />
					</div>
				</div>
				<div
					id="option-pagerank"
					className={pageRankAlgoBtnClass}
					onClick={e =>
						this.props.handleSearchAlgorithmChange(
							Constants.SEARCH_ALGO_PAGERANK
						)
					}
				>
					<label>PageRank</label>
					<div className="indicator-wrapper">
						<span className="circle show-on-selected" />
					</div>
				</div>
			</div>
		);
	}
}

export default SearchRankAlgorithm; 