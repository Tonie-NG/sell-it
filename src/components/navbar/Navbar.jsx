import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "user",
    isTutor: true,
  };

  // const currentUser = false;

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <></>
            <span className="text">Tonie</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <Link to="/mycourses" className="link">
            <span>My Courses</span>
          </Link>
          <Link to="/courses" className="link">
            <span>View Courses</span>
          </Link>

          {!currentUser && (
            <Link to="/login" className="link">
              <span>Sign in</span>
            </Link>
          )}
          {!currentUser?.isTutor && <span>Become a Tutor</span>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <span>{currentUser?.username}</span>
              <img
                src="https://unsplash.com/photos/Mv9hjnEUHR4"
                alt="profile picture"
              />
              {open && (
                <div className="options">
                  {currentUser?.isTutor && (
                    <>
                      <Link to="/courses" className="link">
                        <span>Courses</span>
                      </Link>
                      <Link to="/add-course" className="link">
                        <span>Add Course</span>
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    <span>Orders</span>
                  </Link>
                  <Link to="/messages" className="link">
                    <span>Messages</span>
                  </Link>

                  <Link to="/" className="link">
                    <span>Sign out</span>
                  </Link>
                </div>
              )}
            </div>
          )}
          {!currentUser && (
            <button className={active ? "active" : ""}>Sign Up</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
