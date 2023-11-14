import * as order from "</server/actions/patient/order.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const patient = await prisma.patient.findUnique({
    where: { profileId: user.id },
    include: {
      orders: {
        select: {
          address: true,
          id: true,
          method: true,
          status: true,
          total: true,
        },
      },
    },
  });

  return (
    <div className="prose">
      <ul>
        {patient?.orders.map((_order, idx) => (
          <div key={idx}>
            <li>{JSON.stringify(_order, null, 1)}</li>
            <form action={order.cancel}>
              <input name="id" type="hidden" value={_order.id} />
              <button className="bg-red-200 p-1">Cancel</button>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Page;
