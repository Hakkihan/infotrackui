import axios from 'axios';

const searchTerms = async (sTerm, uTerm) => {
    const response = await axios.get('https://localhost:7016/api/Webscraper/GoogleScrapePositions', {

        headers: {
            Authorization: 'Client-ID 8AKjzo0AZu29EWPIWPp8uhmYsw3YCb0RdjJm6OIMcWE',
        },
        params: {
            searchString: sTerm,
            urlString: uTerm

        }
    });
    console.log(response.data);
    return response.data;
}

export default searchTerms;