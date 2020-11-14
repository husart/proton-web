import React, { useEffect } from "react";
import "./App.scss";
import { Provider,useDispatch } from "react-redux";
import { Router, Route } from "react-router-dom";
import Lesson from "./containers/Lesson";
import FirstPage from "./containers/FirstPage";
import Header from "./components/Header";
import store from "./reducers";
import history from "./history";
import Topics from "./containers/Topics";
import { INIT_CONFIG } from "./reducers/actions";
import Apps from "./containers/Apps";
import List from "./containers/List";
function App() {


  return (
    <Provider store={store}>
      <Header></Header>
      <Router history={history}>
        <Route exact path="/" component={FirstPage} />
        <Route path="/elev" component={List} />
        <Route exact path="/profesor" component={List} />
        <Route exact path="/profesor/:lessonId" component={Lesson} />
        <Route exact path="/elev/:lessonId" component={Lesson} />
      </Router>
    </Provider>
  );
}

export default App;
