import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { sampleProducts } from '../utils/helpers';

test('renders shopping app', () => {
    render(<App />);
    expect(screen.getByText(/Shopping App/i)).toBeInTheDocument();
});

test('displays all products initially', () => {
    render(<App products={sampleProducts} />);
    sampleProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
    });
});

test('shows "No products available" when filtering removes all products', () => {
    render(<App products={sampleProducts} />);
    const filterDropdown = screen.getByRole('combobox');
    fireEvent.change(filterDropdown, { target: { value: 'Non-Existent Category' } });
    expect(screen.getByText(/No products available/i)).toBeInTheDocument();
});