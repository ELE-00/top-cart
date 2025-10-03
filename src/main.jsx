import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
