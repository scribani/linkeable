import { Global, css } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import Candidates from "./pages/Candidates";
import Login from "./pages/Login";
import NewCandidate from "./pages/NewCandidate";
import NotFound from "./pages/NotFound";

const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  :root {
    --gray-2: #4f4f4f;
    --gray-3: #828282;
    --gray-4: #bdbdbd;
    --gray-5: #e0e0e0;
    --card-shadow: 2px 2px 0px #bdbdbd;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Inter", sans-serif;
    color: var(--gray-2);
  }
`;

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <SessionProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/new-candidate" component={NewCandidate} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </SessionProvider>
    </>
  );
}

export default App;
