import React from "react";
import styled from "styled-components";
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
