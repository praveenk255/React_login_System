import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: <IoIosAddCircleOutline /> };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <IoIosAddCircleOutline />
        ) : (
          <IoIosRemoveCircleOutline />
        )}
      </button>
    );
  }
}

export default Toggle;
