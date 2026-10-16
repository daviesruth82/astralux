export default function Header() {
  return (
    <header className="w-full h-[80px] bg-gray-900 flex justify-center items-center shadow-sm">
      <nav className="w-[95%] max-w-8xl h-3/4 flex justify-between items-center">
        
        
        <h1 className="text-3xl sm:text-4xl font-bold text-rose-700">
          AstraLux
        </h1>

        
        <ul className="flex items-center gap-8 list-none text-gray-300 font-medium">
          <li className="cursor-pointer hover:text-rose-500 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-rose-500 transition-colors">Contact</li>
          <li className="cursor-pointer hover:text-rose-500 transition-colors">About</li>
        </ul>

        
        <button className="h-[40px] w-[100px] rounded-2xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition duration-300 shadow-sm">
          Login
        </button>

      </nav>
    </header>
  );
}


