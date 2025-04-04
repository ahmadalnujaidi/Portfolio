import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarWrapper>
        <LogoContainer>
          <Link to="/">
            <Logo>Ahmad Alnujaidi</Logo>
          </Link>
        </LogoContainer>

        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink 
              to="/" 
              active={location.pathname === '/' ? 'true' : 'false'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/skills" 
              active={location.pathname === '/skills' ? 'true' : 'false'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/projects" 
              active={location.pathname === '/projects' ? 'true' : 'false'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/resume" 
              active={location.pathname === '/resume' ? 'true' : 'false'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/contact" 
              active={location.pathname === '/contact' ? 'true' : 'false'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.backgroundDark : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
`;

const NavbarWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    transition: all 0.5s ease;
    padding-top: 2rem;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media screen and (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const NavLink = styled(motion(Link))`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ active, theme }) => 
    active === 'true' ? theme.colors.primary : theme.colors.text};
  padding: 0.5rem 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active === 'true' ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export default Navbar;
