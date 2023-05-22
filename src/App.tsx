import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Main from './pages/Main'
import QR from './pages/QR'

function App() {
  const router = createBrowserRouter([
    {
      path: "/get-code",
      element: <Main />,
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
    {
      path: "/get-qr",
      element: <QR />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
