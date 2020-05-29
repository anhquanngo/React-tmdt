import { combineReducers } from "redux";

import cartReducer from "./cart";
import categoryReducer from "./category";

export default combineReducers({
  Cart: cartReducer,
  Category: categoryReducer,
});
