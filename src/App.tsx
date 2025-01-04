import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Top from "./pages/Top";
import Navbar from "./features/common/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Top />,
    },
])

function App() {
  return (
      <>
          <Navbar />
          <RouterProvider router={router} />
      </>
  )
}

export default App
