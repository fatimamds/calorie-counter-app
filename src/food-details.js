import React from "react";
import styled from "styled-components";

function FoodDetails(props) {
  return (
    <div onClick={() => props.onFoodDetailsClick(props.calories)}>
      <StyledItem> {props.name} </StyledItem>
      <StyledItem> ({props.measure}): </StyledItem>
      <StyledItem> {props.calories} Cal </StyledItem>
    </div>
  );
}

export const StyledItem = styled.span`
  color: "green";
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

export default FoodDetails;
