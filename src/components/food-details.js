import React from "react";
import styled from "styled-components";

import calorieData from "./data/calorie-data.js";

function FoodDetails(props) {
  return (
    <li
      className="container w-50 list-group-item"
      onClick={() => props.onFoodDetailsClick(props.calories)}
    >
      <StyledItem style={{ fontWeight: "bold" }}> {props.name} </StyledItem>
      <StyledItem style={{ color: "dimgray" }}> ({props.measure}): </StyledItem>
      <StyledItem> {props.calories} Cal </StyledItem>
    </li>
  );
}

export const StyledItem = styled.span`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

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
