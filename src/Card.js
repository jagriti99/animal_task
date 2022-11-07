import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="image">
        <img
          src={`https://source.unsplash.com/500x400/?${props.name}`}
          alt={props.name}
        />
      </div>

      <button className="remove" onClick={props.removeCard}>
        X
      </button>
      <div className="card">
        <h2>{props.name}</h2>
        <p className="likes">❤️{props.likes}</p>

        <button className="btn" onClick={props.addLikes}>
          ❤️Add like
        </button>
        <button className="btn" onClick={props.removeLikes}>
          💔Remove like
        </button>
      </div>
    </div>
  );
};
export default Card;
