import { combineReducers, createStore } from "redux";
import Reducer from "../Reducer/Reducer";

const rootReducer = combineReducers({
  Reducer,
});

const store = createStore(rootReducer);

export default store;
