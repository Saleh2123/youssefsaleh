import { _href } from "</core.js";
import * as cart from "</server/actions/patient/cart.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const patient = await prisma.patient.findUnique({
    where: { profileId: user.id },
    select: {
      cart: {
        select: {
          id: true,
          quantity: true,
          product: {
            select: { name: true, price: true, quantity: true },
          },
        },
      },
    },
  });

  let total = 0;

  return (
    <div className="prose">
      <ol>
        {patient?.cart.map((_cart, idx) => {
          total += _cart.quantity * _cart.product.price;
          return (
            <li key={idx}>
              <div>{JSON.stringify(_cart.product, null, 1)}</div>
              <div>
                {`quantity in cart: ${_cart.quantity}`}
                <form action={cart.updateQuantity} className="ml-2 inline p-1">
                  <input name="cartProduct" type="hidden" value={_cart.id} />
                  <input className="w-10 p-0" name="newQuantity" />
                  <button className="ml-2 bg-blue-200">Update</button>
                </form>
              </div>
              <form action={cart.remove} className="inline bg-red-200 p-1">
                <input name="cartProduct" type="hidden" value={_cart.id} />
                <button>Remove</button>
              </form>
            </li>
          );
        })}
      </ol>
      <div className="text-lg font-bold">{`Cart total: $${total}`}</div>
      <a href={_href.patient.checkout}>Checkout</a>
    </div>
  );
};

export default Page;
