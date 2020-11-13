import {SELECT_TOPIC} from './actions';
import topics from '../data/topics';

function topic(state = topics, action) {
  switch (action.type) {
    case SELECT_TOPIC:
    default:
      return state
  }
}
export default topic;