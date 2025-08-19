import TerminalCard from "@/components/terminal.card";
import DefaultLayout from "@/layouts/defaults";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col items-center px-4 py-6 relative bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        <TerminalCard />
        <p className="mt-6 text-center text-gray-600 max-w-xl text-sm leading-relaxed dark:text-neutral-400">
          🚀 Help us make <span className="font-bold">SARVASVA CLI</span> even
          better. Share ideas, request features, or contribute code to expand
          and improve the developer experience.
        </p>

        <a
          aria-label="Open for Work"
          className="fixed bottom-6 right-6 rounded-full px-5 py-3 text-sm font-medium shadow-lg border border-gray-200 bg-white hover:shadow-xl active:scale-95 transition dark:border-neutral-800 dark:bg-neutral-900"
          href="https://github.com/SurajKharkwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open for work
        </a>
      </div>
    </DefaultLayout>
  );
}
