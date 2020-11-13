import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import App from "./App";
import Lesson from "./containers/Lesson";
import FirstPage from "./containers/FirstPage";
import Header from "./components/Header";
import store from "./reducers";
import history from "./history";
import Topics from "./containers/Topics";

ReactDOM.render(
  <Provider store={store}>
    <Header></Header>
    <Router history={history}>
      <Route exact path="/" component={FirstPage} />
      <Route path="/elev" component={Topics} />
      <Route exact path="/profesor" component={Topics} />
      <Route exact path="/profesor/:lessonId" component={Lesson} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
