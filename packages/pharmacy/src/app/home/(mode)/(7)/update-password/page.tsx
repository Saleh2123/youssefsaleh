import * as auth from "</server/actions/auth.js";

const Page = (): React.JSX.Element => (
  <form action={auth.updatePassword}>
    <label htmlFor="username">
      <div>Old password</div>
      <input name="prev" type="password" />
    </label>
    <label htmlFor="password">
      <div>New password</div>
      <input name="new0" type="password" />
    </label>
    <label htmlFor="password">
      <div>Repeat new password</div>
      <input name="new1" type="password" />
    </label>
    <div>
      <button className="mt-2 bg-blue-200 p-1">Update</button>
    </div>
  </form>
);

export default Page;
