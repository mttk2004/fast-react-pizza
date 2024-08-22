// import { useState }                                     from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant.js';
import Button from '../../ui/Button.jsx';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const formErrors = useActionData();
  const isSubmitting = useNavigation().state === 'submitting';

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2 className="mb-6 mt-3 text-xl font-medium">
        Ready to order? Let's go!
      </h2>

      {/*<Form method='POST' action='/order/new'>*/}
      <Form method="POST" className="space-y-3 sm:space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row">
          <label className="inline-flex translate-x-3 items-center justify-start sm:min-w-40 sm:translate-x-0">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
          />
        </div>

        <div className="flex flex-col gap-1 sm:flex-row">
          <label className="inline-flex translate-x-3 items-center justify-start sm:min-w-40 sm:translate-x-0">
            Phone number
          </label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="inline-block translate-x-3 text-xs text-red-700 sm:translate-x-5">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:flex-row">
          <label className="inline-flex translate-x-3 items-center justify-start sm:min-w-40 sm:translate-x-0">
            Address
          </label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-start gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="mt-12 text-center">
          <Button type="primary">
            {isSubmitting ? 'Progressing' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: !!data.priority,
  };

  // check if phone number is valid
  if (!isValidPhone(order.phone)) {
    return { phone: 'Invalid phone number' };
  }

  // create order
  const newOrder = await createOrder(order);

  // redirect to order page
  return redirect(`/order/${newOrder.id}`); //http://localhost:5173/order/XB4113
}

export { action };
export default CreateOrder;
