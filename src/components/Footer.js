import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterLogo>Portfolio</FooterLogo>
          <SocialIcons>
            <SocialIconLink 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#6e5494' }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#0077b5' }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#1da1f2' }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink 
              href="mailto:your.email@example.com" 
              whileHover={{ y: -5, color: '#ea4335' }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </FooterTop>
        <Divider />
        <FooterBottom>
          <Copyright>© {currentYear} Your Name. All rights reserved.</Copyright>
          <FooterLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: 3rem 0 2rem;
  margin-top: 2rem;
`;

const FooterWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterLogo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIconLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  transition: all 0.3s ease;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Footer;
