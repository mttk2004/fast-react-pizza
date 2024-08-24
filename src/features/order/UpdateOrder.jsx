/**
 *  Project: fast-react-pizza
 *  File: UpdateOrder.jsx
 *  Created: 4:06 CH, 24/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import Button from '../../ui/Button.jsx';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant.js';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
