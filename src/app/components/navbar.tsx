import { getPages } from "@/sanity-utils";
import Link from "next/link";

const Navbar = async () => {
  const pages = await getPages();

  console.log(pages);

  return (
    <div className="flex items-center gap-3 text-small text-gray-400">
      {pages.map((page) => (
        <Link className="hover:underline hover:scale-105 transition" key={page._id} href={`/${page.slug}`}>
          {page.title}
        </Link>
      ))}
      <Link className="hover:underline hover:scale-105 transition" href={`/robotics`}>
        Robotics
      </Link>
    </div>
  )
}

export default Navbar;