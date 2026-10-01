import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';   // ✅ add this line
import App from './App';

test('renders FitFlow header', () => {
  render(<App />);
  expect(screen.getByText(/Hello FitFlow!/i)).toBeInTheDocument();
});


