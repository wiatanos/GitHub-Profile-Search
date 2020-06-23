import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setProfiles, setResults } from '../../../../../app/store/actions/index'
import "./index.scss";


let searchTerm = ''

const Search = () => {

  let data = useSelector(state => state.setProfiles.profiles);

  const profileResults = useSelector(state => state.setResults.results);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    searchTerm = e.target.value.toLowerCase()

    console.log(data)

    const results = data.filter(o => o.login.toLowerCase().includes(searchTerm));
    dispatch({type: 'SET_RESULTS', results: results})
  }

  return (
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Procurar"
      />
  );
}

export default Search
