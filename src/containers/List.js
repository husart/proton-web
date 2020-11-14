import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Topics.scss";
import history from "../history";
import { withRouter } from "react-router-dom";
import getTopics from "../selectors/getTopics";

import { SELECT_APP } from "../reducers/actions";
import getApps from "../selectors/getApps";
import Topics from "./Topics";
import Apps from "./Apps";

const List = (props) => {
const config = useSelector(state=> state.config)


  return <div className="card">
    
   {!config.app ?  <Apps/> : <Topics />}
    </div>;
};
export default withRouter(List);
