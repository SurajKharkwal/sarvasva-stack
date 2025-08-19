import { GithubIcon, Terminal } from "@/components/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center p-8 max-w-7xl w-full">
      <div className="mr-auto flex items-center gap-6">
        <Link
          to="/"
          className="text-2xl mr-auto gap-3 flex items-center font-extrabold tracking-tight"
        >
          <button
            aria-label="Terminal"
            className="inline-flex items-center justify-center size-10 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Terminal className="cursor-pointer" />
          </button>
          <span>SARVASVA</span>
        </Link>
        <Link to="/about">ABOUT</Link>
      </div>

      <a
        href="https://github.com/SurajKharkwal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub repository"
        className="inline-flex items-center justify-center size-10 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow active:scale-95 transition dark:border-neutral-800 dark:bg-neutral-900"
      >
        <GithubIcon />
      </a>
    </nav>
  );
}
