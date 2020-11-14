import {  } from "./actions";
import appdata from '../data/apps'

function app(state = [ ...appdata ], action) {
  switch (action.type) {
   
    default:
      return state;
  }
}
export default app;
