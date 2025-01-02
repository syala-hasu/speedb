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
          <div className={`container mx-auto`}>
              <RouterProvider router={router} />
          </div>
      </>
  )
}

export default App
