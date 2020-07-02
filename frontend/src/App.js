import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AppContext } from "./contexts";

function App() {
  const [appState, setAppState] = useState({});
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
