import { _href } from "</core.js";
import * as auth from "</server/actions/auth.js";

export const Logout = ({ className = "mt-2 bg-blue-200 p-1" }): React.JSX.Element => (
  <form action={auth.logOut.bind(null, { redirectTo: _href.root })}>
    <button className={className}>Log Out</button>
  </form>
);
