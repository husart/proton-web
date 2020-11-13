import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Topics.scss";
import history from "../history";
import { withRouter } from "react-router-dom";
import getTopics from "../selectors/getTopics";
import { SELECT_TOPIC } from "../reducers/actions";

const Topics = (props) => {
  const topics = useSelector(getTopics);
  const { pathname } = props.history.location;
  const dispatch = useDispatch();

  const onClick = (topicId) => {
    dispatch({
      type: SELECT_TOPIC,
      payload: topicId,
    });
    history.push(pathname + "/" + topicId);
  };

  const content = topics.map((topic) => (
    <div
      key={topic.topicId}
      className="topicCard"
      onClick={() => {
        onClick(topic.topicId);
      }}
    >
      <h3>{topic.topicTitle}</h3>
      <p>{topic.text}</p>
    </div>
  ));
  return <div>{content}</div>;
};
export default withRouter(Topics);
