import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CheckCircleFilled,
  StarFilled,
} from "@ant-design/icons";
import Slider from "infinite-react-carousel";
import React from "react";
import "./SingleCourse.scss";

function SingleCourse() {
  return (
    <div className="singlecourse">
      <div className="container">
        <div className="left">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <div className="user">
            <div className="pp">
              <img
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>

            <span>John Doe</span>
            <div className="stars">
              <StarFilled style={{ color: "gold" }} />
              <StarFilled style={{ color: "gold" }} />
              <StarFilled style={{ color: "gold" }} />
              <StarFilled style={{ color: "gold" }} />
              <StarFilled style={{ color: "gold" }} />

              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="singleslider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>Course Summary</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis harum consequuntur modi quos sequi officiis quam nulla,
            similique, necessitatibus minima provident ipsam adipisci est
            excepturi illo voluptatibus? Officia ratione est, commodi possimus,
            aspernatur dolorum expedita doloremque architecto eos libero
            necessitatibus quidem fugiat. Non, inventore dolorum id veritatis ex
            ea nesciunt dolores ab eligendi a iusto facilis vitae? Ipsa repellat
            cumque dicta quod nulla ullam cupiditate maiores at impedit commodi
            velit distinctio natus, ipsum a dignissimos. Beatae voluptates
            magnam, cum eaque assumenda porro dolorum, ducimus fugit soluta,
            sint facilis repudiandae nulla. Asperiores vitae voluptatum,
            consequuntur quas provident quo deleniti nemo nulla!
          </p>
          <div className="seller">
            <h2>About the Tutor</h2>
            <div className="user">
              <div className="stats">
                <div className="pp">
                  <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="contact">
                  <span>John Doe</span>
                  <div className="stars">
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>

              <div className="box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  cum omnis. Reprehenderit, inventore tenetur. Laudantium qui
                  deleniti est tempore dignissimos, odit id! Esse est harum
                  autem fugit voluptates ducimus enim, iusto quis minima
                  repudiandae et, eveniet vel iste? Quia recusandae modi
                  veritatis consectetur inventore dignissimos molestiae ex amet
                  illum obcaecati!
                </p>
              </div>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <div className="pp">
                  <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>

                <div className="info">
                  <span className="name">John Doe</span>
                </div>
              </div>
              <div className="stars">
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />

                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eum ea sit debitis laboriosam sed sunt, nobis dicta
                expedita architecto minus perferendis voluptatum possimus
                laborum enim consequatur quibusdam vel? Libero hic quos amet
                fugiat laboriosam vitae, corporis omnis. Eveniet, perspiciatis
                ullam molestias iste rerum quasi explicabo quidem nisi
                reprehenderit in ipsa et. Repellendus, enim voluptates laborum
                ex qui doloremque quod! Quidem labore asperiores nihil nostrum
                fugit amet placeat dolorum tempora.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <div className="yes">
                  <ArrowUpOutlined />
                  <span>Yes</span>
                </div>
                <div className="no">
                  <ArrowDownOutlined />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <div className="pp">
                  <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>

                <div className="info">
                  <span className="name">John Doe</span>
                </div>
              </div>
              <div className="stars">
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />

                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eum ea sit debitis laboriosam sed sunt, nobis dicta
                expedita architecto minus perferendis voluptatum possimus
                laborum enim consequatur quibusdam vel? Libero hic quos amet
                fugiat laboriosam vitae, corporis omnis. Eveniet, perspiciatis
                ullam molestias iste rerum quasi explicabo quidem nisi
                reprehenderit in ipsa et. Repellendus, enim voluptates laborum
                ex qui doloremque quod! Quidem labore asperiores nihil nostrum
                fugit amet placeat dolorum tempora.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <div className="yes">
                  <ArrowUpOutlined />
                  <span>Yes</span>
                </div>
                <div className="no">
                  <ArrowDownOutlined />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <div className="pp">
                  <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>

                <div className="info">
                  <span className="name">John Doe</span>
                </div>
              </div>
              <div className="stars">
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />

                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eum ea sit debitis laboriosam sed sunt, nobis dicta
                expedita architecto minus perferendis voluptatum possimus
                laborum enim consequatur quibusdam vel? Libero hic quos amet
                fugiat laboriosam vitae, corporis omnis. Eveniet, perspiciatis
                ullam molestias iste rerum quasi explicabo quidem nisi
                reprehenderit in ipsa et. Repellendus, enim voluptates laborum
                ex qui doloremque quod! Quidem labore asperiores nihil nostrum
                fugit amet placeat dolorum tempora.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <div className="yes">
                  <ArrowUpOutlined />
                  <span>Yes</span>
                </div>
                <div className="no">
                  <ArrowDownOutlined />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <div className="pp">
                  <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>

                <div className="info">
                  <span className="name">John Doe</span>
                </div>
              </div>
              <div className="stars">
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />
                <StarFilled style={{ color: "gold" }} />

                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eum ea sit debitis laboriosam sed sunt, nobis dicta
                expedita architecto minus perferendis voluptatum possimus
                laborum enim consequatur quibusdam vel? Libero hic quos amet
                fugiat laboriosam vitae, corporis omnis. Eveniet, perspiciatis
                ullam molestias iste rerum quasi explicabo quidem nisi
                reprehenderit in ipsa et. Repellendus, enim voluptates laborum
                ex qui doloremque quod! Quidem labore asperiores nihil nostrum
                fugit amet placeat dolorum tempora.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <div className="yes">
                  <ArrowUpOutlined />
                  <span>Yes</span>
                </div>
                <div className="no">
                  <ArrowDownOutlined />
                  <span>No</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Lorem ipsum dolor sit.</h3>
            <h2>$100</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            assumenda?
          </p>
          <div className="details">
            <div className="features">
              <CheckCircleFilled style={{ color: "lightGreen" }} />
              Lorem, ipsum.
            </div>
            <div className="features">
              <CheckCircleFilled style={{ color: "lightGreen" }} />
              Lorem, ipsum.
            </div>
            <div className="features">
              <CheckCircleFilled style={{ color: "lightGreen" }} />
              Lorem, ipsum.
            </div>
            <div className="features">
              <CheckCircleFilled style={{ color: "lightGreen" }} />
              Lorem, ipsum.
            </div>
            <div className="features">
              <CheckCircleFilled style={{ color: "lightGreen" }} />
              Lorem, ipsum.
            </div>
          </div>
          <button>Continue to payment</button>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
