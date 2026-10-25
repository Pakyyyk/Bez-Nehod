export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 group">
      
      <div className="absolute top-0 left-0 w-full h-5 bg-transparent z-40"></div>

      {/* Přidán bg-[#0a0a0a]/70 a backdrop-blur-lg pro skleněný efekt */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 w-full bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out shadow-2xl">
        
        <div className="flex gap-8 text-2xl text-gray-300">
          <a href="#" className="hover:text-white hover:underline transition-colors">Home</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Teorie</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Praxe</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Učení</a>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-2 border border-white/30 rounded-lg text-2xl text-white hover:bg-white hover:text-black transition-colors">
            LOG IN
          </button>
          <button className="px-6 py-2 border border-white/30 rounded-lg text-2xl text-white hover:bg-white hover:text-black transition-colors">
            SETTINGS
          </button>
        </div>
      </nav>
    </div>
  )
}