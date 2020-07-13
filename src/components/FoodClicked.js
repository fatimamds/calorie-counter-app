import React from "react";
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
