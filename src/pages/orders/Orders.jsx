import { ContactsOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

function Orders() {
  const currentUser = {
    id: 1,
    username: "user",
    isTutor: false,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Amount</th>
            <th>{currentUser?.isTutor ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>On the Road</td>
            <td>About you and I</td>
            <td>$ 100</td>
            <td>50</td>
            <td>
              <Link to="">
                <ContactsOutlined
                  height={50}
                  style={{ color: "green", height: 25 }}
                />
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
