// src/Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../../components/Navbar/Navbar';

test('Navbar renders links correctly', () => {
  render(<Navbar />);

  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const servicesLink = screen.getByText(/services/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});