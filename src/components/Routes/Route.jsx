import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])