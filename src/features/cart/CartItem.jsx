import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice.js';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="pb-2 pt-3 sm:flex sm:items-center sm:justify-between sm:p-3.5 lg:p-4">
      <p className="space-x-2">
        <span className="font-medium">{quantity}&times;</span>
        <span>{name}</span>
      </p>
      <div className="flex items-baseline justify-between sm:space-x-2">
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
