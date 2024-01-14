// src/Navbar.test.js
// Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders navigation links', () => {
    render(<Navbar />);
    const tasksLink = screen.getByText('Tasks');
    const newTaskLink = screen.getByText('New Task');
    const categoriesLink = screen.getByText('Categories');
    const settingsLink = screen.getByText('Settings');
    expect(tasksLink).toBeInTheDocument();
    expect(newTaskLink).toBeInTheDocument();
    expect(categoriesLink).toBeInTheDocument();
    expect(settingsLink).toBeInTheDocument();
  });
});