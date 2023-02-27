import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import headerImage from "../../images/header_illustration.png";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Empower Your Education with Our Online Marketplace -</h1>
          <span>Find Your Perfect Course and Start Learning Today!</span>
          <div className="search">
            <div className="search_input">
              <SearchOutlined style={{ color: "lightgray" }} />
              <input
                className="input"
                type="text"
                placeholder="Seach for courses"
              />
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <img src={headerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
