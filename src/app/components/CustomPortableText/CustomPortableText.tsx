import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import HighlightCode from "../HighlightCode";
import { getImageDimensions } from '@sanity/asset-utils'


export default function CustomPortableText({ value }) {
  const components = {
    types: {
      code: ({ value: { language, code, filename } }) => (
        <div>
          <HighlightCode language={language}>
            {code}
          </HighlightCode>
          <div className="italic text-gray-500">{filename}</div>
        </div>
      ),
      image: ({ value: { asset, alt } }) => {
        const imageProps = {
          src: urlFor(asset).fit("max").url(),
          alt: alt || "",
          width: getImageDimensions(asset).width,
          height: getImageDimensions(asset).height,
        };

        return (
          <div>
            <Image {...imageProps} alt={alt} />
            <div className="text-gray-500">{alt}</div>
          </div>
        );
      },
    },
  };

  return (
    <div className="prose-sm sm:prose md:prose-lg lg:max-w-3xl lg:mx-auto">
      <PortableText value={value} components={components} />
    </div>
  );
}
