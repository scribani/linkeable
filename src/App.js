import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Candidates from "./pages/Candidates";
import Login from "./pages/Login";
import NewCandidate from "./pages/NewCandidate";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/new-candidate" component={NewCandidate} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
