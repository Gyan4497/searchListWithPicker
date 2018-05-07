import React, { Component } from "react";
import "./App.css";
import ReactDom from "react-dom";
import axios from "axios";
import List from "./list";
import SearchBar from "./searchBar";

const nameList = [
  "Thor",
  "Peter",
  "Hulk",
  "Strange",
  "Iron Man",
  "Black Panther"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchList: []
    };
  }

  componentDidMount() {
    this.setState({
      list: nameList
    });
  }

  modifyList = e => {
    var clickedWord = e.target.innerHTML;
    var newList = [...this.state.list];
    this.addSearchItem(clickedWord);
    var ind = newList.indexOf(clickedWord);
    newList.splice(ind, 1);
    this.setState({
      list: newList
    });
  };

  addListItem = name => {
    var newList = [...this.state.list];
    newList.push(name);
    this.setState({
      list: newList
    });
  };

  addSearchItem = clickedWord => {
    var searchArr = [];
    searchArr = [...this.state.searchList];
    searchArr.push(clickedWord);
    this.setState({
      searchList: searchArr
    });
  };

  removeSearchItem = e => {
    const clickedWord = e.target.innerHTML;
    var searchArr = [...this.state.searchList];
    var ind = searchArr.indexOf(clickedWord);
    searchArr.splice(ind, 1);
    this.addListItem(clickedWord);
    this.setState({
      searchList: searchArr
    });
  };

  filterSearch = e => {
    var keyword = e.target.value;
    keyword = keyword.toLowerCase();
    var currentList = [];
    var searchArr = [...this.state.searchList];
    var names = [...nameList];
    if (searchArr.length > 0) {
      for (var i = 0; i < searchArr.length - 1; i++) {
        var ind = names.indexOf(searchArr[i]);
        if (ind >= 0) {
          names.splice(ind, 1);
        }
      }
      currentList = [...names];
    } else {
      currentList = [...nameList];
    }

    if (keyword !== "") {
      var newList = [];
      currentList.map(item => {
        if (item.toLowerCase().indexOf(keyword) >= 0) {
          newList.push(item);
        }
      });
      this.setState({
        list: newList
      });
    } else {
      this.setState({
        list: currentList
      });
    }
  };

  delItem = event => {
    var key = event.keyCode || event.charCode;
    var keyword = event.target.value;
    var searchArr = [...this.state.searchList];
    var names = [...this.state.list];
    if (keyword === "" && searchArr.length > 0) {
      if (key == 8 || key == 46) {
        var name = searchArr.pop();
        names.push(name);
        this.setState({
          searchList: searchArr,
          list: names
        });
      }
    }
  };

  render() {
    const { list, searchList } = this.state;
    return (
      <div>
        <SearchBar
          searchList={searchList}
          removeItem={this.removeSearchItem}
          filterSearch={this.filterSearch}
          delItem={this.delItem}
        />
        <List list={list} modifyList={this.modifyList} />
      </div>
    );
  }
}

export default App;
