import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { BestServices } from './BestServices';

describe('Testing BestServices component', () => {
    it('should show a imagem in the section', () => {
        render(<BestServices />);

        const mainPic = screen.getByRole("img");
        expect(mainPic).toBeInTheDocument();
        expect(mainPic).toHaveAttribute('alt', 'txt');
       
    });   

    it('Should have heading of section and paragraphs', () => {
        render(<BestServices />);

        const mainHeading = screen.getByRole('heading');
        const fristParagraph = screen.getByText('Far far away, begind the word mountains, far from the countris Vakalia and Consanantia, there live the bind texts.');
        const seconParagraph = screen.getByText('Separated they live in Bookmarksgrove rigth at the coast of the Semantics, a larg language ocean.');
        const thirthParagraph = screen.getByText('A small rier named Duden flow by their place and supplies it with the necessary regelialia.');
        const serviceBtn = screen.getByRole('button');
        

        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent("The best services ready To serve you")
        expect(serviceBtn).toBeInTheDocument();
        expect(fristParagraph).toBeInTheDocument();
        expect(seconParagraph).toBeInTheDocument();
        expect(thirthParagraph).toBeInTheDocument();
              
       
    });   

    
})