import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'Shop',
                element:<Shop></Shop>
            },
            {
                path:'Cart',
                element:<Cart></Cart>
            }
        ]
    },
    {
        path:'/Login',
        element:<Login></Login>
    },
    {
        path:'/Register',
        element:<Register></Register>
    }
])