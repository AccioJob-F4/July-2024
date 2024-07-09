import React, { Component } from "react";

export default class Dummy extends Component {
  componentDidMount() {
    // logic
  }

  componentWillUnmount() {
    console.log("Unmounting: ", new Date());
  }

  render() {
    return (
      <div>
        Dummy
        {console.log("MOUNTED")}
      </div>
    );
  }
}
