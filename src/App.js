import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
