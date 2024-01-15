import { Project } from "../../types/Project";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mb-2 object-cover rounded-lg border border-gray-500"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>
          <Link href={`/projects/${project.slug}`}>
            Details...
          </Link>
        </Button>
      </CardFooter>
    </Card>
    // <Link
    //   href={`/projects/${project.slug}`}
    //   key={project._id}
    //   className="border border-gray-400 rounded-lg p-3"
    // >
    //   {project.image && (
    //     <Image
    //       src={project.image}
    //       alt={project.name}
    //       width={1920}
    //       height={1080}
    //       className="mb-2 object-cover rounded-lg border border-gray-500"
    //     />
    //   )}
    //   <div className="font-bold text-xl">
    //     {project.name}
    //   </div>
    // </Link>
  )
}

export default ProjectCard;