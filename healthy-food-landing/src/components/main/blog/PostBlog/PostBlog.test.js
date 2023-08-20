import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { PostBlog } from './PostBlog';

describe('Testing Blog Post Card component', () => {
    it('should show a imagem in the top of card', () => {
        render(<PostBlog
            src='teste-top'
            alt='teste-topImg'
            title='teste'
            profile='teste-profile'
            name='teste-authorname'
            author='teste-author'
          />)

        const topCard = screen.getByRole('img', { name: /teste\-topimg/i })

        expect(topCard).toBeInTheDocument();
       
       
    });     

    it('should show a heading in the midle of card', () => {
        render(<PostBlog
            src='teste-top'
            alt='teste-topImg'
            title='teste'
            profile='teste-profile'
            name='teste-authorname'
            author='teste-author'
          />);

          const headingTitle = screen.getByRole('heading', { name: /teste/i });

          expect(headingTitle).toBeInTheDocument();        
       
       
    });    

    it('should show a infor part of card', () => {
        render(<PostBlog
            src='teste-top'
            alt='teste-topImg'
            title='teste'
            profile='teste-profile'
            name='teste-authorname'
            author='teste-author'
          />);

          const botImg = screen.getByRole('img', { name: /authorname/i });
          const botAuthorName = screen.getByText(/teste\-author/i);
          
          
          expect(botImg).toBeInTheDocument();
          expect(botAuthorName).toBeInTheDocument();         
       
       
    });               

   
    
})