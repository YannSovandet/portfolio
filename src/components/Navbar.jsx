function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Yann Sovandet
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-4">

          <li>
            <a
              href="#about"
              className="px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;