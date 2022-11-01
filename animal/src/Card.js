import React from "react";
import "./Card.css";
import animals from "./animals.js";

function Card(props) {
  let result = animals.map((animal) => {
    return (
      <div className="animal">
        <span className="close">x</span>
        <img
          src={`https://source.unsplash.com/500x400/?${animal.name}`}
          alt="animal icon"
          className="animal-icon"
        ></img>
        <h2 className="animal-name">{animal.name}</h2>
        <div className="like">
          <p className="like-number">♥{animal.likes}</p>
          <button className="like-button" /* onClick={like} */>Like</button>
        </div>
      </div>
    );
  });
  return result;
}

export default Card;

{
  /* <div className="animal">
  <span className="close">x</span>
  <img
    src={`https://source.unsplash.com/500x400/?${animal.name}`}
    alt="animal icon"
    className="animal-icon"
  ></img>
  <h2 className="animal-name">{animal.name}</h2>
  <div className="like">
    <p className="like-number">Likes: {animal.likes}</p>
    <button className="like-button" onClick={like}>
      Add like
    </button>
  </div>
</div>; */
}
