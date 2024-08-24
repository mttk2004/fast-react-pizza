/**
 *  Project: fast-react-pizza
 *  File: UpdateItemQuantity.jsx
 *  Created: 8:43 SA, 24/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from './cartSlice.js';

function UpdateItemQuantity({ pizzaId }) {
  const itemQuantity = useSelector(getItemQuantityById(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-1.5">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-medium">{itemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
