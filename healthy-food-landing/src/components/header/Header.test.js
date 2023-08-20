import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Testing Header component', () => {
    it('should appear in user screen', () => {
        render(<Header />);

        const LogoTitle = screen.getByText('Healthy Food');
        const menuLink1 = screen.getByText('HEALTHY RECIPES');
        const menuLink2 = screen.getByText('BLOG');
        const menuLink3 = screen.getByText('JOIN');

        expect(LogoTitle).toBeInTheDocument();
        expect(menuLink1).toBeInTheDocument();
        expect(menuLink2).toBeInTheDocument();
        expect(menuLink3).toBeInTheDocument();
    });

    it('should have a button in header', () => {
        render(<Header />);

        const headerBtn = screen.getByRole('button')

        expect(headerBtn).toBeInTheDocument();
    })
})