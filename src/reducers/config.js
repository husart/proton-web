import { CLEAR_APP,RESET_CONFIG, SELECT_TYPE, SELECT_TOPIC, SELECT_APP } from "./actions";
import history from "../history";
const initialConfig = {
  selectedTopic: null,
  selectedLesson: null,
  type: null,
  app: null,
};

function config(state = { ...initialConfig }, action) {
  switch (action.type) {
    case SELECT_TYPE:
      return { ...state, type: action.payload, app:null };
    case SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };
    case SELECT_APP:
      return { ...state, app: action.payload };
      case CLEAR_APP:
        return { ...state, app: null};
    case RESET_CONFIG:
      return state.concat([action.text]);
    default:
      return state;
  }
}
export default config;
