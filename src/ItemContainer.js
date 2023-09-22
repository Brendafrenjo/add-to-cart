import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./Item";

function ItemContainer(props) {
  useEffect(() => {}, []);

  function listItems() {
    return props.items.map((item, index) => <Item item={item} key={index} />);
  }

  return (
    <div style={styles}>
      <h2>Item Container</h2>
      {listItems}
    </div>
  );
}

function mapStateToProps(state) {
  return { items: state.item };
}

export default connect(mapStateToProps)(ItemContainer);

const styles = {
  border: "2px solid black",
  width: "40%",
  margin: "50px",
  padding: "20px",
};
