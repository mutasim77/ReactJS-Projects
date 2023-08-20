import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { RecipePost } from './RecipePost';

describe('Testing a Post of Recipes Section component', () => {
    it('should show a imagem in the card', () => {
        render(<RecipePost alt='test'/>);

        const mainImg = screen.getByRole('img');

        expect(mainImg).toBeInTheDocument();
        expect(mainImg).toHaveAttribute('alt');
       
    });   

    it('should show a heading in the post card', () => {
        render(<RecipePost title='test'/>);

        const mainTitle = screen.getByRole('heading');

        expect(mainTitle).toBeInTheDocument();
        expect(mainTitle).toHaveTextContent('test');
       
    });   

    it('should show a Button in the card', () => {
        render(<RecipePost />);

        const mainBtn = screen.getByRole('button');

        expect(mainBtn).toBeInTheDocument();
        
       
    });   

   
})