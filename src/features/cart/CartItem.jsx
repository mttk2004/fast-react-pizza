import { formatCurrency } from '../../utils/helpers.js';
import DeleteItemButton from './DeleteItemButton.jsx';
import UpdateItemQuantity from './UpdateItemQuantity.jsx';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="pb-2 pt-3 sm:flex sm:items-center sm:justify-between sm:p-3.5 lg:p-4">
      <p className="space-x-2">
        <span className="font-medium">{quantity}&times;</span>
        <span>{name}</span>
      </p>
      <div className="flex items-baseline justify-between sm:space-x-4">
        <p className="font-medium text-stone-700">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItemButton pizzaId={pizzaId}>Delete</DeleteItemButton>
      </div>
    </li>
  );
}

export default CartItem;
