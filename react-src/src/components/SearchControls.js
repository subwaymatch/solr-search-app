import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchRankAlgorithm from "./SearchRankAlgorithm";

import "./SearchControls.scss";

class SearchControls extends Component {
  render() {
    return (
      <div className="search-controls">
        <div className="row">
          <div className="col-md-7">
            <SearchForm
              onQueryTermChange={this.props.onQueryTermChange}
              searchInputVal={this.props.searchInputVal}
              requestSearch={this.props.requestSearch}
            />
          </div>

          <div className="col-md-5">
            <SearchRankAlgorithm
              handleSearchAlgorithmChange={
                this.props.handleSearchAlgorithmChange
              }
              searchAlgorithm={this.props.searchAlgorithm}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchControls;
