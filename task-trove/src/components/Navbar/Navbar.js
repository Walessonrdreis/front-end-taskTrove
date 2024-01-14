// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarList, NavbarItem, NavbarLink } from './Navbar.styles';
import TaskManager from '../TaskManager/TaskManager';

const Navbar = () => {
  return (
    <NavbarContainer>
     <NavbarList>
            <NavbarItem><NavbarLink to="/">Home</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/task">Tarefas</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/newtaskform">Nova Tarefa</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/categorias">Categorias</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/contact">Contato</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/about">Sobre</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink to="/settings">Configurações</NavbarLink></NavbarItem>
          </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;

