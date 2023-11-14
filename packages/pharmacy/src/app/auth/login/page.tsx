import { _href } from "</core.js";
import * as auth from "</server/actions/auth.js";

type Props = {
  searchParams: { callbackURL?: string };
};

const Login = ({ searchParams }: Props): React.JSX.Element => (
  <form action={auth.logIn}>
    <label htmlFor="username">
      <div>Username</div>
      <input name="username" />
    </label>
    <label htmlFor="password">
      <div>Password</div>
      <input name="password" type="password" />
    </label>
    <input name="redirectTo" type="hidden" value={searchParams.callbackURL ?? _href.user.home} />
    <div>
      <button className="mt-2 bg-blue-200 p-1">Log In</button>
      <button formAction={auth.otp} className="ml-1 bg-red-200 p-1">
        Forgot Password?
      </button>
    </div>
  </form>
);

export default Login;
