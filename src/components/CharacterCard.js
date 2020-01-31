import React from "react";

export default function CharacterCard(props) {
  // console.log(props)
  return (
    <div>
      <h3>{props.character}</h3>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  );
}
