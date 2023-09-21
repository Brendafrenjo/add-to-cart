import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

class ItemContainer extends Component {
  render() {
    const listItems = props.items.map((item, index) => (
      <Item item={item} key={index} />
    ));

    return (
      <div style={styles}>
        <h2>Item Container</h2>
        {listItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.reminder };
};

export default connect(mapStateToProps)(ItemContainer);

const styles = {
  border: "2px solid black",
  width: "40%",
  margin: "50px",
  padding: "20px",
};
