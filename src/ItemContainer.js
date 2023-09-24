import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import "./ItemContainer.css";
import { fetchItems } from "./action";
import { addItem, deleteItem, fetchItems } from "./action";

function ItemContainer(props) {
  useEffect(() => {
    props.fetchItems(); 
  }, []);

  function listItems() {
    return props.items.map((item, index) => <Item item={item} key={index} />);
  }

  return (
    <div className="Item">
      <h2>Item Container</h2>
      {listItems()}
    </div>
  );
}

function mapStateToProps(state) {
  return { items: state.item };
}

const mapDispatchToProps = {
  fetchItems,
  deleteItem,
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
