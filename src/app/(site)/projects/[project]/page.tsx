import { getProject } from "@/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface ProjectProps {
  params: { project: string }
}

export default async function Project({ params }: ProjectProps) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="font-extrabold text-7xl">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-black font-bold py-3 px-4 whitespace-nowrap hover:bg-slate-700 hover:text-white transition"
        >
          View Project
        </a>
      </header>

      {/* Content goes here */}
      <div className="text-lg text-gray-200 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}

      {project.image &&
        <div>
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
          />
        </div>
      }
    </>

  );
}