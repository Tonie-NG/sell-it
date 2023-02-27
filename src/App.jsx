import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/404/404";
import Add from "./pages/add-courses/Add";
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";
import MyCourses from "./pages/my-courses/MyCourses";
import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";
import SingleCourse from "./pages/single-course/SingleCourse";
import SingleMessage from "./pages/single-message/SingleMessage";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/courses",
          element: <Courses />,
        },

        {
          path: "/courses/:id",
          element: <SingleCourse />,
        },

        {
          path: "/orders",
          element: <Orders />,
        },

        {
          path: "/mycourses",
          element: <MyCourses />,
        },

        {
          path: "/add-course",
          element: <Add />,
        },

        {
          path: "/messages",
          element: <Messages />,
        },

        {
          path: "/message/:id",
          element: <SingleMessage />,
        },

        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
