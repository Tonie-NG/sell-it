import { DeleteFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./MyCourses.scss";

function MyCourses() {
  return (
    <div className="mycourses">
      <div className="container">
        <div className="title">
          <h1>COURSES</h1>
          <Link to="/add-course" className="link">
            <button>Add New Course</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Title</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>On the Road</td>
            <td>About you and I</td>
            <td>$ 100</td>
            <td>50</td>
            <td>
              <Link to="">
                <DeleteFilled style={{ color: "red" }} />
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyCourses;
