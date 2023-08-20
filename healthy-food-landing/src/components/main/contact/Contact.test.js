import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Contact } from './Contact';

describe('Testing Contact component', () => {
    it('should show a imagem in the section', () => {
        render(<Contact />);

        const mainImg = screen.getByRole('img');

        expect(mainImg).toBeInTheDocument();
        expect(mainImg).toHaveAttribute('alt', 'draw of two persons doing a hand shek')

       
    });               

    it('should have a input text to insert email', () => {
        render(<Contact />);

        const mainInput = screen.getByRole('textbox');

        expect(mainInput).toBeInTheDocument();
        expect(mainInput).toHaveAttribute('placeholder', 'Enter your best email');

       
    });               

    it('should show a heading in the contact section', () => {
        render(<Contact />);

        const mainHeading = screen.getByRole('heading');
        
        
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent('Join our membership to get special offer');
       
    });     

    it('should show a button to send a email adress', () => {
        render(<Contact />);

        const mainBtn = screen.getByRole('button');

        expect(mainBtn).toBeInTheDocument();
        expect(mainBtn).toHaveTextContent('Join')
       
    });               
       


    
})