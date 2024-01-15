import { getPages } from "@/sanity-utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Navbar = async () => {
  const pages = await getPages();

  console.log(pages);

  return (
    <div className="flex items-center gap-3 text-small text-secondary-foreground">
      {pages.map((page) => (
        <Link className="hover:underline hover:scale-105 transition" key={page._id} href={`/${page.slug}`}>
          {page.title}
        </Link>
      ))}
      <Link className="hover:underline hover:scale-105 transition" href={`/robotics`}>
        Robotics
      </Link>
      <ModeToggle />
    </div>
  )
}

export default Navbar;