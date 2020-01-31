import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Form, Input } from "reactstrap";

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

  // search bar v.1
  // return (
  //   <div>
  //     <section className="search-form">
  //       <form className="searchBar">
  //         <input type="text" onChange={handleInputChange} value={searchWord} name="name" />
  //       </form>
  //     </section>
  //     {searchResults.map(entry => (
  //       <ul>
  //         <li>{entry.name}</li>
  //         <li>{entry.status}</li>
  //         <li>{entry.species}</li>
  //       </ul>
  //     ))}

  //   </div>

  // search bar v.2
  return (
    <div>
      <section className="search-form">
        <Form className="searchBar">
          <Input type="text" onChange={handleInputChange} value={searchWord} name="name" placeholder="Search characters" />
        </Form>
      </section>
      {searchResults.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            image={character.image}
            character={character.name}
            status={character.status}
            species={character.species}
          />
        )
      }
      )}
    </div>
  )
}
