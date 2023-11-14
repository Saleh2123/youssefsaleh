import { Logout } from "</components/auth/logout.jsx";
import { _href, _mode } from "</core.js";
import * as auth from "</server/auth.js";

const Page = async (): Promise<React.JSX.Element> => {
  const { id, mode } = await auth._unsafe.user();
  return (
    <article className="prose">
      <h2>Hello, {id}!</h2>
      <h3>Actions</h3>
      <ul>
        <li>
          <Logout className="text-blue-700 underline" />
        </li>
        {(_mode.ADMIN | _mode.PATIENT | _mode.PHARMACIST) & mode ? (
          <li>
            <a href={_href.auth.updatePassword}>Update Password</a>
          </li>
        ) : null}
        {_mode.ADMIN & mode ? (
          <li>
            <a href={_href.admin.pharmacists}>Pharmacists</a>
          </li>
        ) : null}
        {_mode.PATIENT & mode ? (
          <>
            <li>
              <a href={_href.patient.products}>Products</a>
            </li>
            <li>
              <a href={_href.patient.cart}>Cart</a>
            </li>
            <li>
              <a href={_href.patient.profile}>Profile</a>
            </li>
            <li>
              <a href={_href.patient.orders}>Orders</a>
            </li>
          </>
        ) : null}
        {_mode.PHARMACIST & mode ? (
          <>
            <li>
              <a href={_href.pharmacist.documents}>Documents</a>
            </li>
            <li>
              <a href={_href.pharmacist.products}>Products</a>
            </li>
          </>
        ) : null}
      </ul>
    </article>
  );
};

export default Page;
