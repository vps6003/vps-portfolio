import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    projectName : "VPS-Portfolio",
    description: "A responsive portfolio built with React, Tailwind, and Vite.",
    link: "https://vps-portfolio.onrender.com/"
  },
  {
    name: "E-commerce App",
    projectName : "VPS-eKart",
    description: "Full-stack e-commerce app with Angular, Node.js, Express.js and MongoDB.",
    link: "https://vps6003.github.io/e-comm-store---frontend-webapp/"
  }
];

export const Projects = () => {
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
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              target="_blank"
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.name} <br /><span className="text-sm text-[aquamarine]">({proj.projectName})</span></h3>
              <p className="text-gray-300">{proj.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
