import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Topics.scss";
import { withRouter } from "react-router-dom";
import getTopics from "../selectors/getTopics";

import { SELECT_TYPE } from "../reducers/actions";
import getApps from "../selectors/getApps";
import Topics from "./Topics";
import Apps from "./Apps";
import history from '../history';
const List = (props) => {
const config = useSelector(state=> state.config)
const dispatch = useDispatch();
useEffect(() => {
    
  
  if(!config.app){
     const path = window.location.pathname.split("/").find(x=> ['profesor','elev'].includes(x));
     dispatch({
        type: SELECT_TYPE,
        payload: path
    })
     history.push(`/${path|| ''}`)
  }
  
}, [])

  return <div className="card">
    
   {!config.app ?  <Apps/> : <Topics />}
    </div>;
};
export default withRouter(List);
