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
    <header className="flex items-center justify-between gap-4 space-y-1 border-b-2 border-stone-400 bg-yellow-400 px-3 py-2 uppercase text-stone-900 sm:space-y-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
      <Link to={'/'} className="font-bold leading-tight tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
