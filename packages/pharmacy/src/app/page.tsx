import { _href } from "</core.js";

const Page = (): React.JSX.Element => (
  <div className="prose">
    <h1>Hello, world!</h1>
    <h3>Actions</h3>
    <ul>
      <li>
        <a className="text-blue-700" href={_href.auth.login}>
          Login
        </a>
      </li>
    </ul>
  </div>
);

export default Page;
