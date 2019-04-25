import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import "./SearchForm.scss";

const axios = require("axios");

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      suggestions: []
    };

    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
  }

  onChange = (event, { newValue, method }) => {
    this.props.onQueryTermChange(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  loadSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return;
    }

    axios
      .get("/suggest", {
        params: {
          q: value
        }
      })
      .then(response => {
        this.setState({ suggestions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearchFormSubmit(e) {
    e.preventDefault();

    this.props.requestSearch(this.props.searchInputVal);
  }

  render() {
    const { suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value: this.props.searchInputVal,
      onChange: this.onChange
    };

    return (
      <div className="search-form-wrapper">
        <i className="material-icons">search</i>
        <form id="search-form" onSubmit={this.handleSearchFormSubmit}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
