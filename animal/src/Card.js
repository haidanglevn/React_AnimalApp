import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="animal">
      <button className="close" onClick={props.delete}>
        x
      </button>
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      ></img>
      <h2 className="animal-name">{props.name}</h2>
      <div className="like">
        <p className="like-number">♥{props.likes}</p>
        <button className="like-button" onClick={props.addLikes}>
          Like
        </button>
      </div>
    </div>
  );
};

export default Card;
