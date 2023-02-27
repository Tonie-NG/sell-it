import {
  GithubOutlined,
  LinkedinOutlined,
  SnippetsOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <hr />
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Tonie</h2>
            <span>© Tonie. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <GithubOutlined />
              <SnippetsOutlined />
              <LinkedinOutlined />
              <TwitterOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
