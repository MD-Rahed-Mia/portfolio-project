import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import router from "./Router/Router";

function App() {
  return (
    <RouterProvider router={router}>
      <>
        <Home />
      </>
    </RouterProvider>
  );
}

export default App;
