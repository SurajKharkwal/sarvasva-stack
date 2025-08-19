import ProjectCard from "@/components/projects.card";
import Link from "next/link";

const fallback = {
  profile: {
    name: "Suraj Kharkwal",
    img: "https://avatars.githubusercontent.com/u/140573524?v=4",
    summary: "CS Engineer • Web & System Dev • Exploring AI + Rust",
    about: `I’m deeply passionate about building products that merge creativity
    with efficiency. Currently working with Next.js .
    Occasionally, I contribute to open-source projects`,
    url: {
      github: "https://github.com/SurajKharkwal",
      linkedin: "https://www.linkedin.com/in/suraj-kharkwal-358268285/",
    },
  },
  work: [
    {
      title: "JUIT Timetable",
      desc: "An Excel parser that processes the college sheet and presents the data in a clear, readable format.",
      link: "https://juit-timetable.vercel.app",
    },
    {
      title: "Sarvasva-stack",
      desc: "A CLI tool for generating starter templates with pre-configured features like authentication, database, and ORM.",
      link: "https://www.npmjs.com/package/@sarvasva-stack/gen",
    },
  ],
  openFor: "Web Development • System-Level Engineering • Linux & Open Source",
};

export default function About() {
  const { profile, work, openFor } = fallback;

  return (
    <div className="w-full mx-auto px-6 py-12">
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={profile.img}
            alt={profile.name}
            className="w-28 h-28 rounded-full border border-neutral-300 dark:border-neutral-700 shadow-sm"
          />
          <h1 className="text-3xl font-semibold">
            Hey, I’m{" "}
            <span className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              {profile.name}
            </span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {profile.summary}
          </p>

          <div className="flex gap-6 mt-2 text-sm font-medium">
            <Link
              href={profile.url.github}
              target="_blank"
              className="hover:underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              GitHub
            </Link>
            <Link
              href={profile.url.linkedin}
              target="_blank"
              className="hover:underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>{profile.about}</p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Work Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {work.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-3">Open for Work</h2>
          <p className="text-neutral-600 dark:text-neutral-400">{openFor}</p>
        </section>
      </section>
    </div>
  );
}
