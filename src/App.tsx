import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import { useScripts } from './hooks/useScripts';

const router = createBrowserRouter([{ path: '/', Component: Home }]);

export default function App() {
  useScripts();
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
