import React from "react";
import styled from "styled-components";
import Global from "./global";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiCamera } from "react-icons/fi";

const Top = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #343a40;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 300px;
  color: white;
`;

const Name = styled.h1`
  font-size: 19px;
  margin-left: 5px;
`;
const Button = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 300px;
  padding: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
  cursor: pointer;
`;
const Header = () => {
  return (
    <Top>
      <Title>
        <FiCamera color="white" size="24px" />
        <Name>Album</Name>
      </Title>
      <Button>
        <GiHamburgerMenu color="#6f7377" size="28px" />
      </Button>
    </Top>
  );
};

export default Header;
