/**
 *  Project: fast-react-pizza
 *  File: AppLayout.jsx
 *  Created: 2:58 CH, 19/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import Header from './Header.jsx';
import CartOverview from '../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader.jsx';

function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <main className="overflow-y-scroll px-2.5pc py-1 sm:px-5pc sm:py-2 md:px-10pc md:py-3 lg:px-15pc lg:py-4">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
