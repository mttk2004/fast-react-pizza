import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button.jsx';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2 md:py-3 lg:py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded transition-all duration-300 hover:scale-110 sm:h-28 md:h-32 ${
          soldOut ? 'opacity-75' + ' grayscale' : ''
        }`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg">{name}</p>
        <p className="text-xs capitalize italic leading-tight text-stone-600 md:text-sm">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold out</p>
          )}
          <Button disabled={soldOut} type="small">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
