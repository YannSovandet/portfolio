import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 sm:px-6 pt-28 pb-16">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-semibold tracking-[4px] uppercase text-sm sm:text-base"
          >
            Welcome To My Portfolio
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mt-6"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Yann Sovandet
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mt-6"
          >
            Flutter Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-base sm:text-lg leading-8 mt-8 max-w-2xl mx-auto lg:mx-0"
          >
            I build beautiful, scalable, and
            high-performance cross-platform
            mobile applications with Flutter.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-10"
          >

            {/* Download CV */}
            <a
              href="/Yann_Sovandet_CV.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-6 sm:px-8 py-4 rounded-2xl font-semibold text-white transition duration-300 shadow-lg shadow-cyan-500/20 hover:scale-105 text-center"
            >
              Download CV
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 text-center"
            >
              View Projects
            </a>

          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center lg:justify-start gap-5 mt-10"
          >

            {/* Github */}
            <a
              href="https://github.com/YannSovandet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/the_vandet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 transition hover:scale-110"
            >
              <FaTelegram />
            </a>

          </motion.div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-1 lg:order-2"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"></div>

            {/* Profile Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-[40px] bg-slate-900 border border-slate-800 backdrop-blur-xl flex items-center justify-center shadow-2xl"
            >

              <div className="text-center">

                {/* Profile Image */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 mx-auto rounded-full p-1 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl">

                  <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"
                  />

                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold mt-6 sm:mt-8">
                  Flutter Developer
                </h3>

                <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-base">
                  Mobile App Specialist
                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;