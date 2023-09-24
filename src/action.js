export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const FETCH_ITEMS = "FETCH_ITEMS";

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

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
  };
}