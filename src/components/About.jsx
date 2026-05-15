function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14 md:mb-20">

          <p className="text-cyan-400 uppercase tracking-widest mb-4 text-sm md:text-base">
            Discover
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About Me
          </h2>

        </div>

        {/* Main Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-14 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Side */}
            <div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                
                <span className="block text-cyan-400 mt-2">
                  Flutter Developer
                </span>
              </h3>

              <p className="text-slate-400 text-base md:text-lg leading-8 md:leading-9 mt-8">
                I am fresh graduate with Bachelor's degree in Computer Science from the Royal University of Phnom Penh (RUPP).
              </p>

              <p className="text-slate-400 text-base md:text-lg leading-8 md:leading-9 mt-6">
                I enjoy developing scalable and beautiful
                cross-platform applications for both
                iOS and Android using Flutter,
                Firebase, Laravel, and RESTful APIs.
              </p>

            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">

              <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-center">

                <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                  4+
                </h3>

                <p className="text-slate-400 mt-4 text-sm md:text-base">
                  PROJECTS
                </p>

              </div>

              <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-center">

                <h3 className="text-4xl md:text-5xl font-bold text-blue-400">
                  New
                </h3>

                <p className="text-slate-400 mt-4 text-sm md:text-base">
                  EXPERIENCE
                </p>

              </div>

              <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-center">

                <h3 className="text-4xl md:text-5xl font-bold text-purple-400">
                  100%
                </h3>

                <p className="text-slate-400 mt-4 text-sm md:text-base">
                  CLEAN UI
                </p>

              </div>

              <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-center">

                <h3 className="text-4xl md:text-5xl font-bold text-pink-400">
                  Clean
                </h3>

                <p className="text-slate-400 mt-4 text-sm md:text-base">
                  ARCHITECTURE
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;