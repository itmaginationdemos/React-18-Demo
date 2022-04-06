import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Joke from './Joke';
import { ScriptElementKindModifier } from 'typescript';

beforeEach(() => render(<App />))

test('renders', () => {

  const linkElement = screen.getByText(/Click to get a random Dad joke/i);
  expect(linkElement).toBeInTheDocument();
});