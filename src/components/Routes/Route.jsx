import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import View_Details from "../Pages/View_Details/View_Details";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Shop",
        element: <Shop></Shop>,
      },
      {
        path: "Cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "View_Details/:id",
        element: <PrivateRoute><View_Details></View_Details></PrivateRoute>,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },
]);
