import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          // console.log(response.data.results)
          setCharacter(response.data.results)
        })
        .catch(error => {
          console.log("Request error", error)
        })
    }
    getCharacters();
  }, [characters]);
  return (
    <section className="character-list">
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={character.id}
            image={character.image}
            character={character.name}
            status={character.status}
            species={character.species}
          />
        );
      })}
    </section>
  );
}
