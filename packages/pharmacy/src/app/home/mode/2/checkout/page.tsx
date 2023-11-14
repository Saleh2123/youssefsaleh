import { OrderMethod } from "@prisma/client";

import * as cart from "</server/actions/patient/cart.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const patient = await prisma.patient.findUnique({
    where: { profileId: user.id },
    select: {
      addresses: true,
      wallet: true,
      cart: {
        select: {
          quantity: true,
          product: { select: { price: true } },
        },
      },
    },
  });

  if (!patient) {
    return <></>;
  }

  const total = patient.cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <>
      <h2>Total: ${total}</h2>
      <form action={cart.checkout}>
        <div>
          Address
          {patient.addresses.map((address, idx) => (
            <div key={idx}>
              <input name="address" type="radio" value={address} />
              <label className="ml-2">{address}</label>
            </div>
          ))}
        </div>
        <div>
          Method
          {Object.values([OrderMethod.Cash, OrderMethod.Stripe]).map((method, idx) => (
            <div key={idx}>
              <input name="method" type="radio" value={method} />
              <label className="ml-2">{method}</label>
            </div>
          ))}
        </div>
        <div>
          <input
            className="peer/wallet"
            name="method"
            type="radio"
            value={OrderMethod.Wallet}
            disabled={total > patient.wallet}
          />
          <label className="ml-2 peer-disabled/wallet:line-through">{OrderMethod.Wallet}</label>
        </div>
        <button className="mt-2 bg-blue-200 p-1">Checkout</button>
      </form>
    </>
  );
};

export default Page;
