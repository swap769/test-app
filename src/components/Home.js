import React, { Component } from "react";
import UserDataList from "./UserDataList";
import NavBarManu from "./NavBarManu";
class Home extends Component {
  render() {
    return (
      <div>
        <NavBarManu />
        <UserDataList />
      </div>
    );
  }
}

export default Home;
