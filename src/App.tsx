import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <StyledHeader>
      Hello
    </StyledHeader>
  );
}

export default App;

const StyledHeader = styled.h1 `
  font-size: 100px;
  color: green;
  background-color: orange;
`
