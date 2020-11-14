import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Topics.scss";
import history from "../history";
import { withRouter } from "react-router-dom";
import getTopics from "../selectors/getTopics";

import { SELECT_APP } from "../reducers/actions";
import getApps from "../selectors/getApps";

const Apps = (props) => {
  const apps = useSelector(getApps);
  const dispatch = useDispatch();
debugger
  const onClick = (appId) => {
    
    dispatch({
      type: SELECT_APP,
      payload: appId,
    });
    
  };

  const content = apps.map((app,index) => (
    <div
      key={index}
      className="topicCard"
      onClick={() => {
        onClick(app.id);
      }}
    >
      <img src={app.logo}></img>
      <h3>{app.topicTitle}</h3>
      <p>{app.text}</p>
    </div>
  ));
  return <div className="card">
    
    {content}
    </div>;
};
export default withRouter(Apps);
