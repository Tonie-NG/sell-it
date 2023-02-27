import { HeartFilled, StarFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.scss";

function CourseCard({ item }) {
  return (
    <Link to={`/courses/${item.id}`} className="course_card link ">
      <img src={item.img} alt="" />
      <div className="info">
        <div className="user">
          <img src={item.pp} alt="" />
        </div>
        <span>{item.username}</span>
      </div>
      <p>{item.title}</p>
      <div className="star">
        <StarFilled style={{ color: "gold" }} />
        <span>{item.star}</span>
      </div>
      <hr />
      <div className="details">
        <HeartFilled style={{ color: "red" }} />
        <div className="starting-at">
          <span>Price: </span>
          <h2>₦{item.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
