import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button.jsx';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="pb-2 pt-3 sm:flex sm:items-center sm:justify-between sm:p-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-baseline justify-between sm:space-x-2">
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
