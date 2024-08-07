import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
