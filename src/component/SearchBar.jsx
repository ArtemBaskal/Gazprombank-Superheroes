import React from "react";
import { connect } from "react-redux";
import { findHeroes, searchName } from "../actions";
import json from "../json/superheroes";
import "../styles/index.css";

class SearchBar extends React.Component {
  onInputChange = event => {
    let filterItems = () =>
      json[this.props.universe].filter(
        hero =>
          hero.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
    this.props.findHeroes(filterItems());
    this.props.searchName(event.target.value);
  };

  render() {
    return (
        <div className="SearchBar">
          {/* <form onSubmit={e => e.preventDefault()}> */}
            {/* <div className="SearchBarInput"> */}
              <input
                type="text"
                value={this.props.searchHeroName}
                placeholder="Имя героя"
                onChange={this.onInputChange}
              />
              <i className="searchIcon">&#128269;</i>
              {/* <i class="searchBarIcon" /> */}
            {/* </div> */}
            {/* <div className="results" /> */}
          {/* </form> */}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchHeroName: state.searchedName,
    heroes: state.foundHeroes,
    universe: state.selectedUniverse
  };
};

export default connect(
  mapStateToProps,
  { findHeroes, searchName }
)(SearchBar);
