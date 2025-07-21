// src/components/LeftHeader/LeftHeader.test.tsx

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LeftHeader from './leftHeader';

describe('LeftHeader', () => {
  it('renders the header title and welcome message', () => {
    render(<LeftHeader />);
    expect(screen.getByText(/Fitness Tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome back ! Good Morning/i)).toBeInTheDocument();
  });
});
