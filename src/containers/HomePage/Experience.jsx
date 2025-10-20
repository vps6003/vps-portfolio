import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    role: "Self - Employed",
    company: "Personal Projects",
    duration: "Sep 2025 - Present",
    description: "Creating Full-Stack Projects : MEAN & MERN"
  },
  {
    role: "Personal Goal Pursuit",
    company: "Career Break",
    duration: "Jan 2024 - August 2025",
    description: "Preparation for UPSC Civil Services Examination!"
  },
  {
    role: "Frontend Developer",
    company: "Digit Insurance",
    duration: "July 2022 - Dec 2023",
    description: "Building responsive web applications using Angular, Bootstrap , PostgresSQL."
  },
];

export const Experience = (props) => {
  const navigate = useNavigate();
  const handleViewDetails = () =>{
    navigate("/about", {state : { scrollTo: "experience"} });
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-gray-800 text-white">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center">
          <span className="underline">Experience</span> <span className="text-lg text-cyan-300 cursor-pointer" onClick={handleViewDetails}>(view details)</span>
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-700 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-300">{exp.company} | {exp.duration}</p>
              <p className="mt-2 text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
