import * as accept from "</server/actions/admin/accept.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const select = {
    profile: {
      select: { username: true },
    },
  };

  const [pending, accepted] = await Promise.all([
    prisma.pendingPharmacist.findMany({ select: select.profile.select }),
    prisma.pharmacist.findMany({ select }),
  ]);

  return (
    <div className="prose">
      <h2>Pending</h2>
      <ul>
        {pending.map((pharmacist, idx) => (
          <li key={idx}>
            {pharmacist.username}
            <form action={accept.pharmacist} className="ml-2 inline bg-blue-200 p-1">
              <input name="username" type="hidden" value={pharmacist.username} />
              <button>Accept</button>
            </form>
          </li>
        ))}
      </ul>

      <h2>Accepted</h2>
      <ul>
        {accepted.map((pharmacist, idx) => (
          <li key={idx}>{pharmacist.profile.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
