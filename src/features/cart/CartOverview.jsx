import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.js';
import { formatCurrency } from '../../utils/helpers.js';

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex h-10 items-center justify-between bg-stone-700 px-3 text-yellow-50 md:px-6">
      <p className="space-x-5 tracking-tight">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={'/cart'} className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
