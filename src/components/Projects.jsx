import { motion } from "framer-motion";

const projects = [
  {
    title: "Sneaker Ecommerce App",
    description: "Flutter ecommerce app with clean UI",
    image: "/homepage.jpg",
  },
  {
    title: "Phone Store App",
    description: "Flutter Phone Store Application",
    image: "/phone_project.jpg",
  },
  {
    title: "POS App",
    description: "Flutter POS system Application",
    image: "/pos_project.jpg",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl"
            >

              {/* Image */}
            <div className="flex justify-center pt-8 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">

  <motion.div
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.4 }}
    className="w-[240px] rounded-[32px] border-4 border-slate-700 shadow-2xl overflow-hidden"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full object-contain"
    />
  </motion.div>

</div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                <button className="mt-6 text-cyan-400 hover:text-cyan-300 transition">
                  View Project →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;