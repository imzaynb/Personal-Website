import { getPage } from "@/sanity-utils";
import { PortableText } from "@portabletext/react";

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const page = await getPage(params.slug);

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="font-extrabold text-5xl">
          {page.title}
        </h1>
      </header>

      {/* Content goes here */}
      <div className="text-lg text-gray-200 mt-5">
        <PortableText value={page.content} />
      </div>
    </>
  )
}

export default Page;