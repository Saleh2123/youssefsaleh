import type { File } from "@prisma/client";

import * as image from "</server/actions/pharmacist/product-image.js";
import * as auth from "</server/auth.js";
import * as dufs from "</server/dufs.js";
import { prisma } from "</server/prisma/client.js";

const Page = async (): Promise<React.JSX.Element> => {
  const user = await auth._unsafe.user();

  const products = await prisma.product.findMany({
    select: { name: true, image: true, id: true },
  });

  return (
    <div className="prose">
      <h2>Data</h2>
      <ul>
        {products.map((product, idx) => {
          const _href = (file: File): React.JSX.Element => {
            const url = dufs.url(dufs.path({ file, user: user.id }));
            return <a href={url.href}>{file.name}</a>;
          };

          return (
            <li key={idx}>
              <div>{product.name}</div>
              {product.image ? (
                _href(product.image)
              ) : (
                <form action={image.add}>
                  <label>
                    <input name="file" type="file" />
                    <input name="productId" type="hidden" value={product.id} />
                  </label>
                  <button className="mt-2 inline bg-blue-200 p-1">Add</button>
                </form>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
