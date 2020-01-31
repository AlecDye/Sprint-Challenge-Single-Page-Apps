import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/"><Button color="primary">
        Home
      </Button></Link>
      <Link to="/characterlist"><Button color="primary">
        Characters
      </Button></Link>
      <Link to="/search"><Button color="primary">
        Search
      </Button></Link>


    </header>
  );
}
