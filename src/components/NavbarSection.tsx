export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-300">
      {/* Main navbar */}
      <nav className="relative bg-transparent overflow-hidden">
        {/* Subtle pink linear on the right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 " />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-2 pb-2 flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-4 -ml-2">
            {/* Logo Placeholder - Replace with your logo */}
            <img src="./LOGO.png" alt="logo" className="h-15 m-2 w-auto" />
          </div>

          {/* Right side - Phone button */}
          <a
            href="tel:+17323444260"
            className="bg-linear-to-r from-[#EC2F6B] to-[#315A68] text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all"
          >
            (+1) 732-344-4260
          </a>
        </div>
      </nav>
    </header>
  )
}
