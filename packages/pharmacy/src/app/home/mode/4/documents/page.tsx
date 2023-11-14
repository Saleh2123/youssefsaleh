import * as docs from "</server/actions/pharmacist/docs.js";
import * as auth from "</server/auth.js";
import * as dufs from "</server/dufs.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const pharmacist = await prisma.pharmacist.findUnique({
    where: { profileId: user.id },
    select: { files: true, profileId: true },
  });

  return (
    <div className="prose">
      <h2>Data</h2>
      <ul>
        {pharmacist?.files.map((file, idx) => {
          const url = dufs.url(dufs.path({ file, user: pharmacist.profileId }));
          return (
            <li key={idx}>
              <a href={url.href}>{file.name}</a>
            </li>
          );
        })}
      </ul>
      <form action={docs.add}>
        <label>
          <input name="file" type="file" />
        </label>
        <div>
          <button className="mt-2 inline bg-blue-200 p-1">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
