import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDataList from "./components/UserDataList";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home} />
        <Route path="/list" component={UserDataList} />
      </Router>
    </div>
  );
}

export default App;
