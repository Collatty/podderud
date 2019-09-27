import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./Person.css";

interface PersonProps {
  name: string;
  imgUrl: string;
  age: number;
  info: string;
  cookingPercentage: string;
  hobbies: string;
  codStats: string;
}

const Person: React.FC<PersonProps> = props => {
  return (
    <div className="person" id={props.name}>
      <Card>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.name + ", " + props.age + " år"}</Card.Title>
          <Card.Text>{props.info}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{`Kokeprosent: ${props.cookingPercentage} %`}</ListGroupItem>
          <ListGroupItem>{`Hobbyer: ${props.hobbies}`}</ListGroupItem>
          <ListGroupItem>{`COD-stats: ${props.codStats}`}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Person;
