import React from "react";
import styled from 'styled-components';

const Header = (props) => {

  const Heading = styled.h1`
    
  `;

  const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: lightblue;
    margin: 0 auto;
  `;

  return (
    <>
      <Heading>{props.title}</Heading>
      <Divider />
    </>
  );

};

export default Header;