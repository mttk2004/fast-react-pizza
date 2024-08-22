import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-700 px-3 py-1.5 uppercase text-yellow-50 sm:px-4 sm:py-2 md:px-6 md:py-3">
      <p className="space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
