import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

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
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle( { backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle( { backgroundColor: 'red' });
  
})


describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
});
