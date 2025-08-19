export default function ProjectCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="p-6 hover:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition bg-neutral-50 dark:bg-neutral-900">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">{desc}</p>
      <a
        href={link}
        target="_blank"
        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline"
      >
        Visit →
      </a>
    </div>
  );
}
