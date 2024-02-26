import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';

const router = createBrowserRouter([{ path: '/', Component: Home }]);

export default function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  );
}
