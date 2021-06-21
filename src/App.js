import React from "react";
import "./App.css";
import Header from "./services/DashBoard/components/Header";
import Sidebar from "./services/DashBoard/components/Sidebar";
import Chat from "./services/DashBoard/components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>WELCOME</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
