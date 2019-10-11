import React from "react";


const StarWarsCard = (props) => {
    return (
        <div className="star_wars_container" key={props.id}>
            <h1>{props.name}</h1>
            <div className="character_info">
                <p>height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair color: {props.hair}</p>
                <p>Skin color: {props.skin}</p>
            </div>
        </div>
    );
}

export default StarWarsCard;


