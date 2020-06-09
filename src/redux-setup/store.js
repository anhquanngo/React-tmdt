import { createStore } from "redux";
import reducers from "./reducers";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "vietpro",
  storage,
};

const persistReducerConfig = persistReducer(persistConfig, reducers);

const store = createStore(persistReducerConfig, composeWithDevTools());
persistStore(store);
export default store;
