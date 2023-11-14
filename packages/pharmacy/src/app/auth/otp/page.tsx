import { _parser } from "</core.js";
import * as auth from "</server/actions/auth.js";

const Page = (): React.JSX.Element => (
  <form action={auth.otpUpdate}>
    <label>
      <div>Username</div>
      <input name="username" />
    </label>
    <label>
      <div>OTP</div>
      <input name="otp" type="password" />
    </label>
    <label htmlFor="password">
      <div>New password {_parser._schema.password}</div>
      <input name="new0" type="password" />
    </label>
    <label htmlFor="password">
      <div>Repeat new password {_parser._schema.password}</div>
      <input name="new1" type="password" />
    </label>
    <div>
      <button className="mt-2 bg-blue-200 p-1">Change Password</button>
    </div>
  </form>
);

export default Page;
