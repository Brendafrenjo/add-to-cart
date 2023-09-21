import React from "react";
import { connect } from "react-redux";
import { addItem } from "./action";

class ItemCreator extends Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(state.text);
    setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
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
