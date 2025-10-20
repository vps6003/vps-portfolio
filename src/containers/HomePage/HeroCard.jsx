import { motion } from "framer-motion";
import ProfileImage from "./../../assets/Profile.png";

export const HeroCard = (props) => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-14 px-4 sm:px-8 lg:px-16 py-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden">

      {/* Text Section */}
      <motion.div
        className="text-center lg:text-left max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
          Hi, I'm <span className="text-blue-500">Vaibhav</span>!
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
          A passionate <span className="text-blue-400 font-medium">Full-Stack Developer</span> crafting elegant and responsive web experiences using React, Vite, and Tailwind CSS.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            onClick={props.onViewProfile}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all cursor-pointer"
          >
            
            <span className="text-white">
              View Projects
              </span>
          </a>
          <a
            href="/contact"
            className="px-5 py-2.5 border border-blue-500 hover:bg-blue-500/20 rounded-lg text-blue-400 font-semibold transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-shrink-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9, x: 70 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={ProfileImage}
          alt="Vaibhav Prakash Saraf"
          className="w-32 h-32 sm:w-44 sm:h-44 lg:w-60 lg:h-60 object-cover rounded-full border-4 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};
