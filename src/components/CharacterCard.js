import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from "reactstrap";
import "../index.css";

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
    <div className="card-container">
      <Card key={props.id}>
        <CardImg top width="100%" src={props.image} alt="profile pic" name="image"></CardImg>
        <CardBody>
          <CardTitle>{props.character}</CardTitle>
          <CardText>Status: {props.status}</CardText>
          <CardText>Species: {props.species}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
