import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders: Все Компоненты', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Все Компоненты/i);
  expect(linkElement).toBeInTheDocument();
});
