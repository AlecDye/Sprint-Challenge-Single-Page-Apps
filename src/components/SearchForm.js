import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = e => {
    setSearchWord(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // console.log("Search", response)
        const results = response.data.results.filter(character => character.name.toLowerCase().includes(searchWord)
        );
        setSearchResults(results)
      })
      .catch(error => {
        console.log("Search request error", error)
      })
  }, [searchWord]);

  return (
    <div>
      <section className="search-form">
        <form className="searchBar">
          <input type="text" onChange={handleInputChange} value={searchWord} name="name" />
        </form>
      </section>
      {searchResults.map(entry => (
        <ul>
          <li>{entry.name}</li>
          <li>{entry.status}</li>
          <li>{entry.speices}</li>
        </ul>
      ))}

    </div>
  );
}
