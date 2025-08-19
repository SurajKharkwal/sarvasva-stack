export default function TerminalCard() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-2 border-b border-gray-200 p-4 dark:border-neutral-800">
        <span className="bg-red-500 w-3 h-3 rounded-full" />
        <span className="bg-yellow-500 w-3 h-3 rounded-full" />
        <span className="bg-green-500 w-3 h-3 rounded-full" />
        <span className="ml-2 font-medium text-sm text-gray-500 dark:text-neutral-400">
          Terminal
        </span>
      </div>

      <div className="p-6 space-y-3">
        {[
          "npx create-next-app",
          "npm install @clerk/nextjs",
          "npm install --save-dev prisma",
        ].map((cmd, i) => (
          <div key={i} className="flex gap-3 items-center">
            <span className="text-lg font-mono select-none">$</span>
            <p className="line-through text-gray-400 font-mono">{cmd}</p>
          </div>
        ))}

        <div className="flex gap-3 items-center text-red-500 font-semibold">
          <span className="text-lg font-mono select-none">#</span>
          <p>Just one command</p>
        </div>

        <div className="flex gap-3 items-center">
          <span className="text-lg font-mono select-none">$</span>
          <p className="font-mono text-emerald-600 dark:text-emerald-400">
            npx @sarvasva-app
          </p>
        </div>
      </div>
    </div>
  );
}
