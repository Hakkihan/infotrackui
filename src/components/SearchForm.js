import { useState } from "react";
import { BsMenuButton } from "react-icons/bs";
// import { useForm} from "react"


function SearchForm({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [urlTerm, setUrlTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm, urlTerm);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
        // console.log(event.target.value);
    }
    const handleUrlTermChange = (event) => {
        setUrlTerm(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mt-3">
                <input  required value={searchTerm} onChange={handleSearchTermChange}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="searchTerms" type="text" placeholder="Search Terms" >
                </input>
            </div>
            <div className="mt-3">
                <input required pattern="(.+)www.(|.+).(|.+)" value={urlTerm} onChange={handleUrlTermChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="urlTerms" type="text" placeholder="URL to be scraped" >
                </input>
            </div>
            <div className="mt-3 flex justify-end">
                <button onClick={handleFormSubmit} className="shadow  font-bold appearance-none border rounded w-1/2 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="submitButton" type="text" >
                    Submit
                </button>
            </div>
            

        </form>
    );

}

export default SearchForm;