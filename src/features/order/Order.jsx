// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getOrder } from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem.jsx';

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna exclude names or
  // address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 py-4">
        <h2 className="text-xl font-medium">Order #{id} status</h2>

        <div className="space-x-2 font-medium">
          {priority && (
            <span className="inline-block rounded-full bg-red-600 px-2.5 py-0.5 text-2xs uppercase tracking-wider text-white">
              Priority
            </span>
          )}
          <span className="inline-block rounded-full bg-green-600 px-2.5 py-0.5 text-2xs uppercase tracking-wider text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded bg-stone-200 px-5 py-3">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-300">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 rounded bg-stone-200 px-5 py-3">
        <p className="text-sm font-medium text-stone-700">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-700">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

async function loader({ params }) {
  return await getOrder(params.orderId);
}

export { loader };
export default Order;
