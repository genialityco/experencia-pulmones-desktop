import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FinishPresentation } from './components/FinishPresentation/FinishPresentation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FinishPresentation />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
