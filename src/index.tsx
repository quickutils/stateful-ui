
import App from './App';
import ReactDOM from 'react-dom/client';
import StorageExamplePage from './StorageExamplePage';
import UrlParamsExamplePage from './UrlParamsExamplePage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/storage", element: <StorageExamplePage/> },
  { path: "/urlparams", element: <UrlParamsExamplePage/> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
