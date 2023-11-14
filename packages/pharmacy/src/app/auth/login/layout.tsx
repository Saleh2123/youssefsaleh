import type { Slots } from "</core/types/next.d.js";

import { redirect } from "next/navigation.js";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";

const Layout = async (slots: Slots): Promise<React.JSX.Element> =>
  (await auth.get()) ? redirect(_href.user.home) : <>{slots.children}</>;

export default Layout;
