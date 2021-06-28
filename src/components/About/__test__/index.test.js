import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe("About component", () => {
  //make sure 'it' renders correctly using
  it('renders', () => {
    render(<About />)
  })

  //make sure the rendered component matches snapshot 
  it("matches snapshot DOM node structure", () => {
    const {asFragment} = render(<About />)
    expect(asFragment()).toMatchSnapshot();
  })
})