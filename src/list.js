import React, { Component } from "react";
import "./App.css";
import ReactDom from "react-dom";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, modifyList } = this.props;
    return (
      <div>
        <ul>
          {list.map((item, key) => (
            <li key={key} onClick={modifyList}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
