import Link from "next/link";
import { BottomBorder } from "@/components/ui";
import { blogs } from "./helpers";

export default function Blogs() {
  return (
    <section className="mb-auto">
      <div className="preme-container">
        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group w-fit border-b-2 hover:border-none duration-300"
            >
              <Link href={blog.url} target="_blank" className="relative">
                <h4 className="relative z-10 text-3xl">{blog.name}</h4>
                <BottomBorder className="bottom-1 h-1 opacity-0 group-hover:opacity-100 duration-300" />
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-2/4 md:w-1/3 h-screen overflow-hidden mix-blend-overlay dark:mix-blend-screen z-10 opacity-70">
          <video
            className="h-full object-cover"
            src="/assets/writing.mp4"
            autoPlay
            loop
          />
        </div>
      </div>
    </section>
  );
}
