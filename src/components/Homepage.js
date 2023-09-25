import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs';
import SearchForm from "./SearchForm";
import searchTerms from "../apicaller";

function Homepage() {
    const [ searchIndexNumbers , setsearchIndexNumbers] = useState('');

    const handleSubmit = async (sTerm , uTerm) => {
        const result = await searchTerms(sTerm, uTerm);
        console.log(result);
        setsearchIndexNumbers(result);

    };

    return (
        

        <div className="flex content-center justify-center w-auto" >
            <div>
                <div className="flex content-center justify-center w-auto" >
                    <h1 className="text-3xl mt-3"> Web scraping search</h1>
                </div>
                <div className="flex flex-row content-center justify-center w-auto" >
                    <SearchForm onSubmit={handleSubmit} />
                </div>
                <div>Index positions: {searchIndexNumbers}</div>
            </div>
        </div>


    );
}

export default Homepage;