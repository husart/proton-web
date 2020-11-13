function questions(state = [1,2], action) {
    switch (action.type) {
      case 'SET_ANSWER':
        return state.concat([action.text])
      default:
        return state
    }
  }
  export default questions;