import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export function Post({ post }) {
  const { title, mainImage, body } = post || {};

  return (
    <main className="container p-4 mx-auto prose prose-lg">
      {title ? <h1>{title}</h1> : null}
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left w-1/3 m-0 mr-4 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
      <hr />
      <Link href="/blog">&larr; Return to blog</Link>
    </main>
  );
}