

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/Button/Button';

it('shows an alert when clicked', () => {
  window.alert = jest.fn(); // Mock da função alert

  render(<Button />);
  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement); // Simular um clique no botão

  expect(window.alert).toHaveBeenCalledTimes(1); // Verifica se o alert foi chamado uma vez
});