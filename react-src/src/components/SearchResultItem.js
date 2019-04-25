import React, { Component } from "react";

import "./SearchResultItem.scss";

class SearchResultItem extends Component {
  render() {
    let { idx, id, title, snippet, url } = this.props;

    return (
      <div className="search-result-item">
        <a className="box-link" href={url} title={title}>
          <div className="title-wrapper">
            <div className="row">
              <div className="col-md-2">
                <p className="index-display">
                  {(idx + 1).toString().padStart(2, 0)}
                </p>
              </div>

              <div className="col-md-10">
                <h2>{title}</h2>
                <p className="snippet">{snippet}</p>
              </div>
            </div>
          </div>

          <div className="id">
            <i className="material-icons">fingerprint</i>
            <span>{id}</span>
          </div>
          <div className="url">
            <i className="material-icons">link</i>
            <span>{url}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default SearchResultItem;
