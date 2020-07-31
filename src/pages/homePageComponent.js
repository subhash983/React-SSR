import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => console.log("JS is running")}>
          Console Log
        </button>
      </div>
    );
  }
}

export default Home;
