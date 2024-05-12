import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Error from "./pages/Error";
import Catagories from "./pages/Catagories";

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
