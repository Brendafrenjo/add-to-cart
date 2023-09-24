export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

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
