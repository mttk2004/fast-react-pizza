/**
 *  Project: fast-react-pizza
 *  File: Button.jsx
 *  Created: 8:25 SA, 22/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'rounded-full bg-yellow-400 font-medium uppercase text-stone-900 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    small: base + ' text-xs px-3 py-1 md:text-sm md:px-4 md:py-2',
    primary:
      base + ' text-sm px-5 py-2 sm:px-6 sm:py-3 md:text-base md:px-8 md:py-4',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
