import * as cart from "</server/actions/patient/cart.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      quantity: true,
    },
  });
  return (
    <div className="prose">
      <ol>
        {products.map((product, idx) => (
          <li key={idx}>
            {JSON.stringify({ name: product.name, price: product.price }, null, 1)}
            {product.quantity > 0 && (
              <form action={cart.add} className="ml-2 inline bg-blue-200 p-1">
                <input name="product" type="hidden" value={product.id} />
                <button>Add to cart</button>
              </form>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Page;
