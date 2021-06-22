import React from "react";
import "./App.css";
import Header from "./services/DashBoard/components/Header";
import Sidebar from "./services/DashBoard/components/Sidebar";
import Chat from "./services/DashBoard/components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Google from "./services/Authentication/components/Google";
import { useStateValue } from "./Utility/StateProvider";
const App = () => {
  const [{ user }, dispatch] = useStateValue;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Google />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome to #SLACK</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
