import { RESET_CONFIG, SELECT_TYPE,SELECT_TOPIC } from "./actions";

const initialConfig = {
  selectedTopic: 1,
  selectedLesson: null,
  type: "professor",
};

function config(state = { ...initialConfig }, action) {
  switch (action.type) {
    case SELECT_TYPE:
      return { ...state, type: action.payload };
    case SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };
    case RESET_CONFIG:
      return state.concat([action.text]);
    default:
      return state;
  }
}
export default config;
