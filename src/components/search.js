import axios from 'axios';

const Search = async (name) => {
    let result = await axios.get(`/api/recipes/search/${name}`);
    console.log(result.data.data);
    return result.data.data;
}

export default Search;