import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/Home/HomePage"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
])

export default routes
