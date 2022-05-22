import React from "react";
import Snake from "./Snake";
import Food from "./Food";
import "./index.css";

class App extends React.Component {
  state = {
    food: [6, 8],
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  };
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} /> 
      </div>
    );
  }
}
export default App;
