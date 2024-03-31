import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import AppLayout from "./pages/AppLayout"
import Products from "./components/Products"

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products/:id',
          element: <Product />
        },
        {
          path: '/products/category/:categoryName',
          element: <Products />
        },
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App
