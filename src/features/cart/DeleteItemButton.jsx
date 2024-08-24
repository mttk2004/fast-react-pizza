/**
 *  Project: fast-react-pizza
 *  File: DeleteItemButton.jsx
 *  Created: 7:48 SA, 24/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { deleteItem } from './cartSlice.js';
import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';

function DeleteItemButton({ children, pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="smallSecondary" onClick={() => dispatch(deleteItem(pizzaId))}>
      {children}
    </Button>
  );
}

export default DeleteItemButton;
