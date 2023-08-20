import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Blog } from './Blog';

describe('Testing Blogcomponent', () => {
    it('should show a info in the top of component', () => {
        render(<Blog />)

        const minHeading = screen.getByRole('heading', { name: /read our blog/i });
        const minParagraph = screen.getByText(
            /far far away, behind the word mountains, far from the countries vakalia and consonantia, there live the blind texts/i
            );

        expect(minHeading).toBeInTheDocument();       
        expect(minParagraph).toBeInTheDocument();       
       
    });

    it('should show buttons to navigate', () => {
        render(<Blog />)

        const leftBtn = screen.getByRole('button', { name: /←/i })
        const rigthBtn = screen.getByRole('button', { name: /→/i })

        expect(leftBtn).toBeInTheDocument();       
        expect(rigthBtn).toBeInTheDocument();       
       
    });
    
    

   
    
})