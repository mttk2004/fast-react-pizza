import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getItemQuantityById } from '../cart/cartSlice.js';
import DeleteItemButton from '../cart/DeleteItemButton.jsx';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const itemQuantity = useSelector(getItemQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-1.5 md:py-2 xl:py-2.5">
      <img
        src={imageUrl}
        alt={name}
        className={`h-20 rounded transition-all duration-300 hover:scale-110 md:h-24 ${
          soldOut ? 'opacity-75' + ' grayscale' : ''
        }`}
      />
      <div className="flex grow flex-col">
        <p
          className={`font-medium ${soldOut ? 'text-stone-500' : 'text-stone-800'}`}
        >
          {name}
        </p>
        <p className="text-xs capitalize italic leading-tight text-stone-600 md:text-sm">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (itemQuantity ? (
              <DeleteItemButton pizzaId={id}>Delete this</DeleteItemButton>
            ) : (
              <Button disabled={soldOut} type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
