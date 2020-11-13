import {SELECT_TOPIC, GET_LESSON, GET_ALL_LESSONS,PREV_PAGE_LESSON,NEXT_PAGE_LESSON} from './actions';
import lessons from '../data/lessons'
function lesson(state = lessons, action) {
  switch (action.type) {
  //  case SELECT_TOPIC:
   //   return { ...state, selectedLesson: action.payload.lesson };
    case PREV_PAGE_LESSON:
      return state.concat([action.text])
    default:
      return state
  }
}
export default lesson;