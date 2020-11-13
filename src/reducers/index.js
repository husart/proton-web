import { combineReducers, createStore } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import lesson from "./lesson";
import config from "./config";
import topics from "./topics";
const reducers = combineReducers({
  lesson,
  config,
  topics,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
