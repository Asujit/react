import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Redirect from "./pages/Redirect.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import User from "./pages/User.jsx";
import LoggedIn from "./pages/LoggedIn.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Dash from "./pages/Dash.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import LocationPage from "./pages/Location.jsx";
import Advanced from "./pages/Advanced.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
        children:[
          {
            index: true,
            element: <Navigate to="advance"/>
          },
          {
            path: "advance",
            element: <Advanced/>
          },
          {
            path:"location",
            element: <LocationPage/>
          }
        ]
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "setting",
            element: <Settings />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "home",
        element: <Redirect />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "login",
        element: <LoggedIn />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dash />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
