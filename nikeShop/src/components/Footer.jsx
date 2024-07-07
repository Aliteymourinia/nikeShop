
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

const FooterLink = styled.li`
  margin-bottom: 15px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink>
          <a href="#about">About Us</a>
        </FooterLink>
        <FooterLink>
          <a href="#contact">Contact Us</a>
        </FooterLink>
        <FooterLink>
          <a href="#privacy">Privacy Policy</a>
        </FooterLink>
      </FooterLinks>
      <SocialMediaIcons>
      </SocialMediaIcons>
    </FooterContainer>
  );
};

export default Footer;
