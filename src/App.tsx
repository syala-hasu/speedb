import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Top from "./pages/Top";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Top />,
    },
])

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App
