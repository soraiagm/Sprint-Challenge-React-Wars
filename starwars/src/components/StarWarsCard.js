import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, 
  } from 'reactstrap';

const StarWarsCard = (props) => {
    return (
      <div className="star_wars_char" key={props}>
        <Card key={props.id} >
          {/* <CardImg top width="100%" src="/Images/1.jpg" alt="Card img" /> */}
          <CardBody>
            <CardTitle className="name">{props.name}</CardTitle>
            <div>
            <CardText>Height: {props.height}</CardText>
            <CardText>Mass: {props.mass}</CardText>
            <CardText>Hair color: {props.hair}</CardText>
            <CardText>Skin Color: {props.skin}</CardText>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default StarWarsCard;


