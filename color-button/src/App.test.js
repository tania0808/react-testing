import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with a role of buttoj and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // expect the background to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background to be blue
  expect(colorButton).toHaveStyle( { backgroundColor: 'blue' } )

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('disable button when checkbox is checked', () => {
  render(<App/>);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
 
})