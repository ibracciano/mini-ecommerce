import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./structure/Layout"
import All from "./routes/All"
import Sort from "./routes/Sort"
import Categories from "./routes/Categories"
import Cart from "./routes/Cart"
import Product from "./routes/Product"
import ErrorPage from "./routes/ErrorPage"
import { products, singleProducts } from "./api/AllProducts"

// 1- Je definis mes routes dans le composant App


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <All />,
          loader: products,
        },
        {
          path: "sort",
          element: <Sort />,
          loader: products,
        },
        {
          path: "category",
          element: <Categories />,
          loader: products,
        },
        {
          path: "cart",
          element: <Cart />,

        },
        {
          path: "product/:id",
          element: <Product />,
          loader: singleProducts,
        },
      ]

    }
  ])
  return <RouterProvider router={router} />
}

export default App