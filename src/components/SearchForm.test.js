import { screen, render, waitFor } from "@testing-library/react";
import user from '@testing-library/user-event';
import Homepage from "./Homepage";
import SearchForm from "./SearchForm";

test('The form renders with two input fields', () => {
    const mock = jest.fn();
    render(<Homepage>
            <SearchForm onSubmit={mock} />
        </Homepage>);
    const inputSearchString = screen.getByPlaceholderText(/search term/i);  
    const inputUrlString = screen.getByPlaceholderText(/Url to be scraped/i);
    expect(inputSearchString).toBeInTheDocument();
    expect(inputUrlString).toBeInTheDocument();

})

test('calls on onSubmit when the form is submitted', async () => {
    const mock = jest.fn();
    render(<SearchForm onSubmit={mock} />);
    await waitFor(() => {
        const inputSearchString =  screen.getByPlaceholderText(/search term/i); 
        user.click(inputSearchString); 
        user.keyboard('React Testing Library');
        const inputUrlString = screen.getByPlaceholderText(/Url to be scraped/i);   
        user.click(inputUrlString);
        user.keyboard('https://www.testing-library.com/');
        const button  = screen.getByRole('button');
        user.click(button);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith( 'React Testing Library',  'https://www.testing-library.com/' );
    })  
    
})