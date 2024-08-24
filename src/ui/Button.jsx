/**
 *  Project: fast-react-pizza
 *  File: Button.jsx
 *  Created: 8:25 SA, 22/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'rounded-full bg-yellow-400 font-medium uppercase text-stone-900 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    small: base + ' text-xs px-3 py-1 lg:text-sm md:px-4 md:py-1.5',
    smallSecondary:
      'rounded-full bg-stone-200 font-medium uppercase text-stone-600' +
      ' transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 [box-shadow:inset_0_0_2px_black]' +
      ' focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2' +
      ' hover:text-stone-700' +
      ' disabled:cursor-not-allowed text-xs px-3 py-1 lg:text-sm md:px-4 md:py-1.5',
    primary:
      base + ' text-sm px-5 py-2 sm:px-6 sm:py-3 md:text-base md:px-8 md:py-4',
    secondary:
      'rounded-full font-medium uppercase text-stone-600' +
      ' transition-colors [box-shadow:inset_0_0_2px_black]' +
      ' duration-300 hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300' +
      ' focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2' +
      ' disabled:cursor-not-allowed text-sm px-5 py-2 sm:px-6 sm:py-3 md:text-base md:px-8 md:py-4',
    round: base + ' text-sm px-2.5 py-1 lg:text-base md:px-3 md:py-1.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={styles[type]}
      {...(onClick && { onClick })}
    >
      {children}
    </button>
  );
}

export default Button;
