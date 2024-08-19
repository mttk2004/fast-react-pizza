import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home                                    from './ui/Home.jsx';
import Menu, { loader as menuLoader }          from './features/menu/Menu.jsx';
import NotFound                                from './ui/NotFound.jsx';
import CreateOrder                             from './features/order/CreateOrder.jsx';
import Order                                   from './features/order/Order.jsx';
import Cart                                    from './features/cart/Cart.jsx';
import AppLayout                               from './ui/AppLayout.jsx';


const router = createBrowserRouter([
																		 {
																			 element     : <AppLayout />,
																			 errorElement: <NotFound />,
																			 children    : [
																				 { path: '/', element: <Home />, },
																				 { path        : '/menu',
																					 element     : <Menu />,
																					 loader      : menuLoader,
																					 errorElement: <NotFound />,
																				 },
																				 { path: '/cart', element: <Cart /> },
																				 { path: '/oder/new', element: <CreateOrder /> },
																				 { path: '/oder/:orderId', element: <Order /> },
																			 ]
																		 }
																	 ], {
																		 initialEntries: [window.location.pathname]
																	 });


function App() {
	return <RouterProvider router={router} />;
}

export default App;
