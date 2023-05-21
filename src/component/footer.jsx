import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  bottom: 0;
  text-align: justify;
  display: flex;
  align-items: justify;
  justify-content: justify;
`;

const FooterText = styled.p`
  font-size: 1rem;
  max-width: 38rem;
  line-height: 1.8rem;
  .text-link {
    color: #007bff;
    text-decoration: none;
    &:hover {
      filter: brightness(0.5);
      text-decoration: underline;
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Album example is © Bootstrap, but please dounload and customize it for
        yourself! New to Bootstrap? Visit the homepage or read our{" "}
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
