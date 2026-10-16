export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto flex w-[95%] max-w-8xl flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold text-red-300">AstraLux</p>
          <p className="mt-1 text-sm text-gray-300">
            Luxury, thoughtfully curated.
          </p>
        </div>
        <p className="text-sm text-gray-400">
          &copy; AstraLux. All rights reserved.
        </p>
      </div>
    </footer>
  );
}