import { Logout } from "</components/auth/logout.jsx";
import * as auth from "</server/auth.js";

const Page = async (): Promise<React.JSX.Element> => {
  const { id } = await auth._unsafe.user();
  return (
    <article className="prose">
      <h2>Hello, {id}!</h2>
      <h3>Actions</h3>
      <ul>
        <li>
          <Logout className="text-blue-700 underline" />
        </li>
      </ul>
    </article>
  );
};

export default Page;
