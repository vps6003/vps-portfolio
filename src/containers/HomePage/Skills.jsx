import { motion } from "framer-motion";

const skills = ["React", "Tailwind CSS", "JavaScript", "Redux", "Node.js", "Git", "Vite"];

export const Skills = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center underline">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="px-5 py-3 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
