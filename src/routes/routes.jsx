import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Notfound from "../pages/Notfound/Notfound";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<PrivateRoute><Home></Home></PrivateRoute>
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
        path: '/chefdetails',
        element: <ChefDetails></ChefDetails>
      },
      {
        path: '*',
        element: <Notfound></Notfound>
      }
    ]
  },
]);

export default router;