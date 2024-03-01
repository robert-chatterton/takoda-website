import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import FestivalImage from './routes/Festival';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/festival', Component: FestivalImage }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
