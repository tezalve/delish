import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Notfound from "../pages/Notfound/Notfound";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        // only route where data was preloaded
        path: '/chefdetails/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:  ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: '*',
        element: <Notfound></Notfound>
      }
    ]
  },
]);

export default router;