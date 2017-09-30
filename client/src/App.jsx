import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route component={Main} />
      </Switch>
    </div>
  </Router>;

export default App;
