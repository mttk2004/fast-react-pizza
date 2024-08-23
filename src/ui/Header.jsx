/**
 *  Project: fast-react-pizza
 *  File: Header.jsx
 *  Created: 2:58 CH, 19/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import Username from '../features/user/Username.jsx';

function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4 space-y-1 border-b border-stone-300/50 bg-yellow-400 px-3 py-1 uppercase text-stone-900 sm:space-y-2 sm:px-4 md:px-6">
      <Link to={'/'} className="font-bold leading-tight tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
