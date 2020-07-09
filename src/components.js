import React from "react";
import styled from "styled-components";

import FoodDetails from "./food-details.js";
import calorieData from "./data/calorie-data.js";

/* Navigation Bar */
const NavBar = styled.div`
  margin: 0;
  padding-bottom: 0;
  margin-bottom: 20px;
  width: 100%;
  background-color: #343a40;
  color: #fff;
  border-color: #080808;
  min-height: 55px;
  border: 1px solid transparent;
`;

export function Header(props) {
  return (
    <NavBar>
      <div
        style={{
          fontSize: "20px",
          fontFamily: "Lucida Sans Unicode",
          fontWeight: "bold",
          textAlign: "left",
          paddingTop: "14px",
          paddingLeft: "15px"
        }}
      >
        {props.heading}
      </div>
    </NavBar>
  );
}
/* Display Food Details Table */
export function FoodTable(props) {
  return calorieData.map(foodItem => (
    <FoodDetails
      key={foodItem.name}
      name={foodItem.name}
      measure={foodItem.measure}
      calories={foodItem.calories}
      onFoodDetailsClick={name => props.onFoodDetailsClick(name)}
    />
  ));
}
/* Display Total Calorie Count */
export function FoodClicked(props) {
  return (
    <div
      style={{
        fontFamily: "Lucida Sans Unicode",
        paddingBottom: "15px",
        fontWeight: "bold",
        fontSize: "20px"
      }}
    >
      Total Calorie Count: {props.foodClicked}
    </div>
  );
}

/* Display Footer */
export function Footer() {
  return (
    <footer style={{ paddingTop: "15px", paddingBottom: "5px" }}>
      <hr />
      <p>
        <a style={{ color: "dimgray" }} href="https://twitter.com/fatimamds99">
          Twitter
        </a>{" "}
        •{" "}
        <a
          style={{ color: "dimgray" }}
          href="https://www.linkedin.com/in/fatimamds/"
        >
          LinkedIn
        </a>{" "}
        •{" "}
        <a style={{ color: "dimgray" }} href="https://github.com/fatimamds">
          GitHub
        </a>
      </p>
    </footer>
  );
}
