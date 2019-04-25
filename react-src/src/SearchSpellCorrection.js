import React, { Component } from "react";

class SearchSpellCorrection extends Component {
  render() {
    const { spellSuggestion } = this.props;

    if (!spellSuggestion) return null;
    else return <div>Spell Suggestion</div>;
  }
}

export default SearchSpellCorrection;
