import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { IconContext } from 'react-icons';
import Home from './routes/Home';

const router = createBrowserRouter([{ path: '/', Component: Home }]);

export default function App() {
  return (
    <div>
      {/* <IconContext.Provider value={{}}> */}
      <RouterProvider router={router} />
      {/* </IconContext.Provider> */}
    </div>
  );
}
