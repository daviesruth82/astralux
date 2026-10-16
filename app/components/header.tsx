export default function Header() {
  return (
    <header className="w-full h-20 bg-gray-900 flex justify-center items-center shadow-sm sticky top-0 z-50">
      
      <nav className="w-[95%] h-full flex justify-between items-center">
        
        
        <h1 className="text-2xl sm:text-3xl font-bold text-rose-700 tracking-wide">
          AstraLux
        </h1>
        
      
        <ul className="hidden sm:flex items-center gap-6 lg:gap-8 list-none text-gray-300 font-medium text-sm sm:text-base">
          <li className="cursor-pointer hover:text-rose-500 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-rose-500 transition-colors">Contact</li>
          <li className="cursor-pointer hover:text-rose-500 transition-colors">About</li>
        </ul>
        
        
        <button className="h-10 px-5 rounded-xl bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition duration-300 shadow-sm">
          Login
        </button>

      </nav>
    </header>
  );
}