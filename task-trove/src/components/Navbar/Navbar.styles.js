// Navbar.styles.js

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display:flex;
  justify-content: center;
  
`;

export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const NavbarItem = styled.li`
  margin-right: 1rem;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor:pointer;

  &:hover {
    color: #ccc;
  }
`;

export default NavbarLink;