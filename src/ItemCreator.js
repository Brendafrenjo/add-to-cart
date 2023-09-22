import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./action";

class ItemCreator extends Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={state.text}
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (text) => dispatch(addItem(text)),
  };
};

export default connect(null, mapDispatchToProps)(ItemCreator);
