import React, { Component } from "react";
import SearchResultItem from "./SearchResultItem";

import "./SearchResults.scss";

class SearchResults extends Component {
  render() {
    const { spellCorrection, items, requestSearch } = this.props;

    const spellCorrectionDiv = spellCorrection ? (
      <div id="spell-correction-wrapper">
        <div id="query-term-corrected">
          Showing results for{" "}
          <span className="term">{spellCorrection.corrected}</span>
        </div>
        <div
          id="query-term-original"
          onClick={() => {
            requestSearch(spellCorrection.original, true);
          }}
        >
          Search for&nbsp;
          <span className="term">{spellCorrection.original}</span>&nbsp;instead
        </div>
      </div>
    ) : null;

    return (
      <div id="search-results">
        {spellCorrectionDiv}
        <div id="search-result">
          {items.map((doc, idx) => {
            return (
              <SearchResultItem
                key={doc.id}
                idx={idx}
                id={doc.id}
                title={doc.og_title ? doc.og_title : "N/A"}
                snippet={doc.snippet ? doc.snippet : "N/A"}
                url={doc.og_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResults;
