import React from "react";
import styled from "styled-components";
const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const MainTitle = styled.p`
  font-size: 37px;
  font-weight: 20;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 40;
  line-height: 155%;
  color: #888296;
`;

const Top = styled.nav`
  background-color: #343a40;
  justify-content: space-between;
`;

const Button = styled.div`
  margin-top: 30px;
`;

const MainButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 15px;
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
    color: white;
    transition: 0.2s;
  }
`;

const SecondButton = styled.button`
  background-color: #6c757d;
  color: white;
  font-size: 15px;
  border: 1px solid #6c757d;
  border-radius: 4px;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  &:hover {
    background-color: #5a6268;
    color: white;
    transition: 0.2s;
  }
`;

const HeadText = styled.strong`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const Bottom = () => {
  return (
    <TitleBlock>
      <MainTitle>Album example</MainTitle>
      <SubTitle>
        Something short and leading about the collection below—its contents,
        <br />
        the creator, etc. Make it short and sweet, but not too short so folks
        don’t
        <br />
        simply skip over it entirely.
      </SubTitle>
      <Button>
        <MainButton>Main call to action</MainButton>{" "}
        <SecondButton>Secondary action</SecondButton>
      </Button>
    </TitleBlock>
  );
};
export default Bottom;
