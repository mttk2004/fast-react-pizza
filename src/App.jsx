import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx';
import NotFound from './ui/NotFound.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder.jsx';
import Order, { loader as orderLoader } from './features/order/Order.jsx';
import Cart from './features/cart/Cart.jsx';
import { action as updateOrderAction } from './features/order/UpdateOrder.jsx';
import AppLayout from './ui/AppLayout.jsx';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <NotFound />,
        },
        { path: '/cart', element: <Cart /> },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <NotFound />,
          action: updateOrderAction,
        },
      ],
    },
  ],
  {
    initialEntries: [window.location.pathname],
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
