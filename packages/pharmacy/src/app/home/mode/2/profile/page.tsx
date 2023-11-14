import * as profile from "</server/actions/patient/profile.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const patient = await prisma.patient.findUnique({
    where: { profileId: user.id },
    select: { addresses: true, wallet: true },
  });

  return patient ? (
    <div className="prose">
      <h3>Wallet: ${patient.wallet}</h3>
      <h3>Addresses</h3>
      <ul>
        {patient.addresses.map((address, idx) => (
          <li key={idx}>{address}</li>
        ))}
      </ul>
      <form action={profile.updateAddresses}>
        <textarea name="addresses" />
        <div>
          <button className="mt-1 bg-blue-200">Update</button>
        </div>
      </form>
    </div>
  ) : (
    <></>
  );
};

export default Page;
