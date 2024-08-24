import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant.js';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice.js';
import store from '../../store.js';
import { formatCurrency } from '../../utils/helpers.js';
import { useState } from 'react';
import { fetchAddress } from '../user/userSlice.js';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const isSubmitting = useNavigation().state === 'submitting';
  const {
    name,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((store) => store.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = totalCartPrice * 0.15;
  const totalPrice = totalCartPrice + (withPriority ? priorityPrice : 0);
  const isLoadingAddress = addressStatus === 'loading';

  return (
    <div>
      <h2 className="mb-6 mt-3 text-balance text-center text-xl font-medium">
        Ready to order? Let's go!
      </h2>

      {/*<Form method='POST' action='/order/new'>*/}
      <Form method="POST" className="space-y-3 sm:space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row">
          <label className="inline-flex items-center justify-start pl-3 sm:min-w-40 sm:translate-x-0 sm:p-0">
            Full Name
          </label>
          <input
            type="text"
            name="customer"
            defaultValue={name}
            required
            className="input w-full"
          />
        </div>

        <div className="flex flex-col gap-1 sm:flex-row">
          <label className="inline-flex items-center justify-start pl-3 sm:min-w-40 sm:translate-x-0 sm:p-0">
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
          <label className="inline-flex items-center justify-start pl-3 sm:min-w-40 sm:translate-x-0 sm:p-0">
            Address
          </label>
          <div className="relative grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {!addressError && (
              <p className="inline-block translate-x-3 text-xs text-red-700 sm:translate-x-5">
                {addressError}
              </p>
            )}
            <span className="top-50 absolute right-1 top-0.5 sm:top-1.5 md:top-1">
              {!address && (
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Auto
                </Button>
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 pl-3 sm:p-0">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.latitude && position.longitude
              ? `${position.latitude},${position.longitude}`
              : ''
          }
        />

        <div className="mt-12 text-center">
          <Button disabled={isLoadingAddress || isSubmitting} type="primary">
            {isSubmitting
              ? 'Progressing'
              : `Order now from ${formatCurrency(totalPrice)}`}
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
    priority: data.priority === 'true',
  };

  // check if phone number is valid
  if (!isValidPhone(order.phone)) {
    return { phone: 'Invalid phone number' };
  }

  // create order
  const newOrder = await createOrder(order);

  // do not overuse
  store.dispatch(clearCart());

  // redirect to order page
  return redirect(`/order/${newOrder.id}`);
}

export { action };
export default CreateOrder;
