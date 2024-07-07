import React from "react";
import snews from "../assets/snews.jpg";

const Card = ({ title, description, src, url }) => {
  return (
    <>
      <div
        className="card bg-dark m-4 p-2"
        style={{ maxWidth: "348px", color: "white" }}
      >
        <img
          src={src ? src : snews}
          className="card-img-top"
          style={{ maxHeight: "200px", widows: "360px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 25)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 50) : ""}
          </p>
          <a href={url} className="btn btn-primary">
            visit
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
