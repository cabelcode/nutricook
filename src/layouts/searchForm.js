import { useState } from "react";
import Search from "../components/search";
import Spinner from "../components/spinner";

const SearchForm = ({handleResult}) =>{

    const [recipeName, setRecipeName] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async () => {
        let result = await Search(recipeName);
        handleResult(result);
        setLoading(false);
    }

    return ( 
        <div className="search-form">
            {loading ? <Spinner/> : ''}
            <input className="search-input" onChange={ (e) => { setRecipeName(e.target.value) }} type='text'/>
            <button className="searchBtn" onClick={ () => { handleSubmit(); setLoading(true); } }>Search</button>
        </div> 
    );
}

export default SearchForm;