import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CourseCard from "../../components/course-card/CourseCard";
import { courses } from "../../data/data";
import "./Courses.scss";

function Courses() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const changeFilter = (event) => {
    setFilter(event.target.value);
  };
  const changeSort = (event) => {
    setSort(event.target.value);
  };

  let { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (filter === "") {
      pathname = "/courses";
    } else {
      pathname = `/courses?cat=${filter}`;
      navigate(pathname);
    }

    return () => {
      pathname = "/courses";
    };
  }, [filter]);

  useEffect(() => {
    if (sort === "") {
      pathname = "/courses";
    } else {
      pathname = `/courses?cat=${sort}`;
      navigate(pathname);
    }

    return () => {
      pathname = "/courses";
    };
  }, [sort]);

  return (
    <div className="courses">
      <div className="container">
        <div className="top">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <div className="menu">
            <div className="filter">
              <label> Filter By:</label>
              <select value={filter} onChange={changeFilter}>
                <option value="">{""}</option>
                {courses.map((course) => (
                  <option value={course.cat} key={course.id}>
                    {course.cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="sort">
              <label htmlFor="">Sort By: </label>
              <select name="" value={sort} onChange={changeSort}>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="course-div">
          {courses.map((course) => (
            <CourseCard item={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
