function Skills() {
  const skills = [
    "Flutter",
    "Dart",
    "Laravel",
    "Firebase",
    "RESTful API",
    "JWT",
    "SQL(Navicat)",
    "Version Control",
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 sm:px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Skills
          </h2>

        </div>

        {/* Main Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl">

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl py-6 px-4 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >

                <h3 className="text-lg md:text-xl font-semibold">
                  {skill}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;