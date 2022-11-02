import React from "react";

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
      <div className="like-section">
        <span
          className="material-symbols-outlined down"
          onClick={props.removeLikes}
        >
          arrow_downward
        </span>
        <div className="like-number">
          <p>♥{props.likes}</p>
        </div>
        <span className="material-symbols-outlined up" onClick={props.addLikes}>
          arrow_upward
        </span>
      </div>
    </div>
  );
};

export default Card;
