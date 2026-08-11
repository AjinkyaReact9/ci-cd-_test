// __tests__/home.test.tsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, it, expect, test } from 'vitest';
import Home from '../app/page';

test('Home Page Unit Tests', () => {
  it('renders the correct welcome heading text', () => {
    render(<Home />);
    const heading = screen.getByTestId('main-heading');
    
    // Change this line to use native string matching instead:
    expect(heading.textContent).toBe('Welcome to CI/CD Demo');
  });
});
