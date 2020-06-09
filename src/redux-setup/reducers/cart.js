import { actionType } from "../../shared/constants";

const initState = {
  data: [],
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return _handleAddToCart(state, action.payload);
    case actionType.UPDATE_QUANTITY_CART:
      return _handleUpdateQuantityCart(state, action.payload);
    case actionType.DELETE_PRODUCT_CART:
      const newCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, data: newCart };
    case actionType.DELETE_ALL_CART:
      return initState;
    default:
      return state;
  }
}

const _handleUpdateQuantityCart = (state, payload) => {
  const oldData = state.data;

  const newData = oldData.map((item) => {
    if (item.id === payload.id) {
      item.quantity = parseInt(payload.quantity);
    }
    return item;
  });

  return { ...state, data: newData };
};

const _handleAddToCart = (state, payload) => {
  const oldData = state.data;

  let isExits = false;

  const newData = oldData.map((item) => {
    if (!isExits && item.id === payload.id) {
      item.quantity += payload.quantity;
      isExits = true;
    }
    return item;
  });

  if (!isExits) newData.push(payload);

  return { ...state, data: newData };
};
