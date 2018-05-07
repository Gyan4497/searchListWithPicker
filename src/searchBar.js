import React, { Component } from "react";
import "./App.css";
import ReactDom from "react-dom";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchList, removeItem, filterSearch, delItem } = this.props;
    return (
      <div className="search">
        <div>
          {searchList.map((item, key) => (
            <span key={key} className="search-items" onClick={removeItem}>
              {item}
            </span>
          ))}{" "}
        </div>
        <input type="text" onChange={filterSearch} onKeyDown={delItem} />
      </div>
    );
  }
}

export default SearchBar;
