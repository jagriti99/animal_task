import React from "react";

const Card = (props) => {
  return (
    <div className="styleImage">
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />
      <div className="styleCard ">
        <button className="remove" onClick={props.removeCard}>
          X
        </button>
        <h2>{props.name}</h2>
        <p className="likes">❤️{props.likes}</p>
        <button onClick={props.addLikes}>Add like</button>
      </div>
    </div>
  );
};
export default Card;
