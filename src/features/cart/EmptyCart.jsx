import LinkButton from '../../ui/LinkButton.jsx';

function EmptyCart() {
  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-40">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-balance text-center font-medium">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
