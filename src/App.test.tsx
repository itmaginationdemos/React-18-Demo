import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import Joke from './Joke';
import { ScriptElementKindModifier } from 'typescript';

beforeEach(() => render(<App />))

test('renders', () => {

  const linkElement = screen.getByText(/Click to get a random Dad joke/i);
  expect(linkElement).toBeInTheDocument();
});

test("Counter increases value", async ()=> {
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  await screen.findByText("Count: 1");
})
test("A joke appears", async ()=> {
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  await screen.findByTestId("joke")
  
})