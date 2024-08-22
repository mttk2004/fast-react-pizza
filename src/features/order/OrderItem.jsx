import { formatCurrency } from '../../utils/helpers.js';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-2">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base">
        <p>
          <span className="font-medium">{quantity}&times;</span> {name}
        </p>
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
