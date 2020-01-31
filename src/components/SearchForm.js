import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log("Search", response)
      })
  }, [searchWord]);
  const handleInputChange = e => {
    setSearchWord(e.target.value);
  }
  return (
    <section className="search-form">
      <form className="searchBar">
        <input type="text" onChange={handleInputChange} value={searchWord} name="name" />
      </form>
    </section>
  );
}
