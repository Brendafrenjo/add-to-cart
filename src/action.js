export function addItem(text) {
  return {
    type: "ADD_ITEM",
    payload: text,
  };
}

export function deleteItem(item) {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
}
