import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";
import SearchForm from "./SearchForm";

test('The form title renders with value Web Scraping Search', () => {
    const mock = jest.fn();
    render(<Homepage>
            <SearchForm onSubmit={mock} />
        </Homepage>);
    const header = screen.getByRole('heading', { name: /web scraping/i});
    expect(header).toBeInTheDocument();
})

