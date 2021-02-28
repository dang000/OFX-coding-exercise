import React from 'react';
import styled from 'styled-components';

const PillButton = (props) => {
  const { title, onClick } = props;

  const Button = styled.button`
    background-color: #347cac;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
    width: 200px;
  `;

  return (
    <Button type="submit" onClick={onClick}>
      {title}
    </Button>
  );

};

export default PillButton;