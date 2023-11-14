import * as order from "</server/actions/patient/order.js";

const Page = (): React.JSX.Element => (
  <div className="prose">
    <h2>Stripe Checkout (TESTING MODE)</h2>
    <form action={order._stripe}>
      <label>
        Card number
        <div>
          <input />
        </div>
      </label>
      <label>
        Expiration Date
        <div>
          <input />
        </div>
      </label>
      <label>
        CVV
        <div>
          <input />
        </div>
      </label>
      <div>
        <button className="mt-1 bg-blue-200">Pay</button>
      </div>
    </form>
  </div>
);
export default Page;
