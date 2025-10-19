import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import logo from "./assets/logo_baros.png";
import { Navbar } from "./components/Navbar/Navbar";
import { DrinksList } from "./views/DrinksList/DrinksList";
import { NotFound } from "./views/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/drinks" />,
    errorElement: <NotFound />,
  },
  {
    path: "/drinks",
    element: <DrinksList />,
  },
]);

export function App() {
  return (
    <>
      <Navbar />
      <header className="container">
        <div>
          <img src={logo} alt={"logo"} /> <span>Witaj w BarOS</span>
        </div>
      </header>
      <RouterProvider router={router} />
    </>
  );
}
