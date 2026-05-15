function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          Yann Sovandet
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

    </nav>
  );
}

export default Navbar;