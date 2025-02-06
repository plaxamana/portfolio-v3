import Image from "next/image";
import CustomPortableText from "../CustomPortableText";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {getImageDimensions} from '@sanity/asset-utils'

export function Post({ post }) {
  const { title, mainImage, body } = post || {};
  // const { width, height } = getImageDimensions(mainImage)

  return (
    <main className="mx-auto">
      <div className="my-12 lg:max-w-3xl lg:mx-auto sm:my-20 lg:my-32">
        <h1 className="text-4xl font-bold lg:text-5xl">{title}</h1>
      </div>
      <CustomPortableText value={body} />
      <div className="my-20 lg:max-w-3xl lg:mx-auto">
        <Link href="/blog" className="underline hover:text-blue-400">&larr; Return to blog</Link>
      </div>
    </main>
  );
}