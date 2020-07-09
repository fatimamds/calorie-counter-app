import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Header, FoodTable, FoodClicked, Footer } from "./components";
import { Button } from "./Button";

class App extends React.Component {
  state = { totalCalorie: 0 };
  clickHandler = calorie => {
    this.setState({ totalCalorie: this.state.totalCalorie + calorie });
  };
  resetHandler = () => {
    this.setState({ totalCalorie: 0 });
  };
  render() {
    return (
      <div className="App">
        <Header heading="My Calorie Count" />
        <div
          style={{ fontFamily: "Lucida Sans Unicode", paddingBottom: "10px" }}
        >
          Click the items from your meal below, to count the total calories you
          consumed today -
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FoodClicked
            style={{ marginRight: "auto" }}
            foodClicked={this.state.totalCalorie}
          />
          <Button style={{ marginLeft: "auto" }} onClick={this.resetHandler}>
            Reset
          </Button>
        </div>
        <FoodTable onFoodDetailsClick={this.clickHandler} />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
