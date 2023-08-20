import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

describe('Testing Footer component', () => {
    it('should appears copyright message in user screen', () => {
        render(<Footer />);

        const copyMsg = screen.getByText("© Copyright 2019 Stack. All Rights Reserved")
        expect(copyMsg).toBeInTheDocument();
       
    });

    it('should appears text links in footer user screen', () => {
        render(<Footer />);

        const frstLink = screen.getByText("Privacy Policy")
        const sndLink = screen.getByText("Terms and Conditions")
        expect(frstLink).toBeInTheDocument();
        expect(sndLink).toBeInTheDocument();
       
    });

    it('should show the links in footer', () => {
        render(<Footer />);

        const getLinks = screen.getByText("Privacy Policy");
        
        expect(getLinks).toHaveAttribute('href', './')
        
    });

    
})