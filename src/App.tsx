import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { CocktailDetails, CocktailsList, Favourites, NotFound } from './views';
import { Layout } from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, loader: () => redirect('/cocktails') },
      { path: 'cocktails', element: <CocktailsList /> },
      { path: 'cocktails/:coctailId', element: <CocktailDetails /> },
      { path: 'cocktails/favourites', element: <Favourites /> },
    ],
  },
]);

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
