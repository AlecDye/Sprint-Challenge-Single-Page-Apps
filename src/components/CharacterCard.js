import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

export default function CharacterCard(props) {
  // console.log(props)
  // const [character, setCharacter] = useState();
  // const { id } = useParams();
  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(response => {
  //       setCharacter(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [character])
  return (
    <div>
      <h3>{props.character}</h3>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  );
}
