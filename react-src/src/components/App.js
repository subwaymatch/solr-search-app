import React, { Component } from "react";

import "reset-css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import * as Constants from "../constants";

import SearchControls from "./SearchControls";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchAlgorithm: Constants.SEARCH_ALGO_DEFAULT,
      spellCorrection: null,
      items: [],
      searchInputVal: ""
    };

    // Configure Android-styled toast
    toast.configure();

    this.handleSearchAlgorithmChange = this.handleSearchAlgorithmChange.bind(
      this
    );

    this.onQueryTermChange = this.onQueryTermChange.bind(this);
    this.requestSearch = this.requestSearch.bind(this);
  }

  onQueryTermChange(val) {
    this.setState({
      searchInputVal: val
    });
  }

  requestSearch(queryTerm, ignoreSpellCheck = false) {
    var params = {
      q: queryTerm,
      fl: "id,og_title,og_url",
      wt: "json",
      ignoreSpellCheck: ignoreSpellCheck
    };

    if (queryTerm !== this.state.searchInputVal) {
      this.setState({
        searchInputVal: queryTerm
      });
    }

    if (this.state.searchAlgorithm === Constants.SEARCH_ALGO_PAGERANK) {
      params["sort"] = "pageRankFile desc";
    }

    axios
      .get("/select", {
        params: params
      })
      .then(response => {
        console.log(response.data);
        const { items, spellCorrection } = response.data;

        let newState = {
          items: items,
          spellCorrection: spellCorrection
        };

        if (spellCorrection) {
          newState.searchInputVal = spellCorrection.corrected;
        }

        this.setState(newState);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearchAlgorithmChange(newAlgorithm) {
    this.setState({
      searchAlgorithm: newAlgorithm
    });
  }

  render() {
    return (
      <div className="App">
        <div className="box-wrapper">
          <SearchControls
            searchInputVal={this.state.searchInputVal}
            onQueryTermChange={this.onQueryTermChange}
            requestSearch={this.requestSearch}
            handleSearchAlgorithmChange={this.handleSearchAlgorithmChange}
            searchAlgorithm={this.state.searchAlgorithm}
          />
          <SearchResults
            requestSearch={this.requestSearch}
            spellCorrection={this.state.spellCorrection}
            items={this.state.items}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
