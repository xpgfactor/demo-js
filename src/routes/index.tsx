import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Home } from 'src/pages/Home';
import { Products } from 'src/pages/Products';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);
