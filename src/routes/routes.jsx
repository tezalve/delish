import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";

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
            }
        ]
    },
]);

export default router;