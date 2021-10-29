import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
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
    --bg-gray: #e5e5e5;
    --border-gray: 1px solid #bdbdbd;
    --card-shadow: 2px 2px 0px #bdbdbd;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Inter", sans-serif;
    color: var(--gray-2);
    background-color: var(--bg-gray);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
  padding: 32px 0 24px 0;
  margin: auto;
`;

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <AppContainer>
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
      </AppContainer>
    </>
  );
}

export default App;
