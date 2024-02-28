import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Job from "./pages/jobs.jsx";
import Details from "./pages/detail.jsx";
import Error from "./pages/error.jsx";
import PrivateRoute from "./routers/private_route.jsx";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const App = () => {
  const isLogin = localStorage.getItem("isLogin")
  const [LoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log("1:", isLogin)
    if (isLogin) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    const intervalId = setInterval(() => {
      const isLogin2 = localStorage.getItem("isLogin");
      console.log(isLogin2)
      if (isLogin2) {
        console.log("+++")
        setLoggedIn(true);
      } else {
        console.log("---")
        setLoggedIn(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isLogin]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/jobs",
      children: [
        {
          path: "",
          element: (
            <PrivateRoute>
              <Job />
            </PrivateRoute>
          ),
        },
        {
          path: ":id",
          element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
          ),
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
