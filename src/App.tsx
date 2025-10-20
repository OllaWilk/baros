import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { DrinkDetails, DrinksList, Favourites, NotFound } from './views';
import { Layout } from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, loader: () => redirect('/drinks') },
      { path: 'drinks', element: <DrinksList /> },
      { path: 'drinks/:drinkId', element: <DrinkDetails /> },
      { path: 'drinks/favourites', element: <Favourites /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
