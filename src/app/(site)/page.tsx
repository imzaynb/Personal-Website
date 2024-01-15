import ProjectCard from "@/components/project-card";
import { getProjects } from "@/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {/* HERO Section */}
      <section className="mb-10">
        <h1 className="text-5xl font-bold mb-3">Zayn Baig</h1>
        <p className="text-lg text-secondary-foreground">@zaynb06</p>

      </section>

      <section className="min-h-[80vh] mb-10">
        {/* ABOUT Section */}
        <h2 className="mb-5 text-secondary-foreground text-2xl"> About Me.</h2>

      </section>

      {/* EXPERIENCES Section */}
      <section className="min-h-[20vh] mb-10">
        <h2 className="mb-5 text-secondary-foreground text-2xl">Experiences.</h2>

      </section>

      {/* PROJECTS Section */}
      <section className="min-h-[20vh] mb-10">
        <h2 className="mb-5 text-secondary-foreground text-2xl"> Projects.</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
