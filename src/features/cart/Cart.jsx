import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton.jsx';
import CartItem from './CartItem.jsx';
import Button from '../../ui/Button.jsx';
import { clearCart, getCart } from './cartSlice.js';
import EmptyCart from './EmptyCart.jsx';

function Cart() {
  const name = useSelector((store) => store.user.name);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-4 text-lg font-medium sm:mt-8">Your cart, {name}!</h2>

      <ul className="divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
