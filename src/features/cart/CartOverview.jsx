import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex h-10 items-center justify-between bg-stone-700 px-3 uppercase text-yellow-50 md:px-6">
      <p className="space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
