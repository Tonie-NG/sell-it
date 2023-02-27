import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/slidecard/CatCard";
import { cards, explores } from "../../data/data";
import Video from "../../images/video.mp4";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5.1} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className="title">
              <CheckCircleOutlined />
              Lorem ipsum dolor sit amet.
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, debitis iure delectus assumenda esse minus!
            </p>
            <div className="title">
              <CheckCircleOutlined />
              Lorem ipsum dolor sit amet.
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, debitis iure delectus assumenda esse minus!
            </p>
            <div className="title">
              <CheckCircleOutlined />
              Lorem ipsum dolor sit amet.
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, debitis iure delectus assumenda esse minus!
            </p>
            <div className="title">
              <CheckCircleOutlined />
              Lorem ipsum dolor sit amet.
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, debitis iure delectus assumenda esse minus!
            </p>
          </div>
          <div className="video">
            <video src={Video} controls loading="lazy"></video>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            {explores.map((ex) => (
              <Link key={ex.id} className="link" to={`courses?cat=${ex.cat}`}>
                <div className="item">
                  <img src={ex.img} alt="" />
                  <hr />
                  <span className="text">{ex.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
