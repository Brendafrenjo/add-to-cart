export const addItem = (text) => ({
  type: "ADD_ITEM",
  payload: text,
});

export const deleteItem = (item) => ({
  type: "DELETE_ITEM",
  payload: item,
});
