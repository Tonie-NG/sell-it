import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ item }) {
  return (
    <Link to={`/courses/${item.id}`}>
      <div className="cat_card">
        <img src={item.img} alt="" loading="lazy" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
