import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Catagories from "./pages/catagories/Catagories";
import Recipes from "./pages/recipes/Recipes";
import Ingredients from "./pages/ingredients/Ingredients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <Error />,
  },
  {
    path: "/catagories",
    element: <Catagories />,
    errorElement: <Error />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
    errorElement: <Error />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
