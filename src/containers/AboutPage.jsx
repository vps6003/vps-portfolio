import { AnimatedContent } from "../components/animations/AnimatedContent";
import { AvatarCard } from "../components/AvatarCard";
import ProfileImage from "../assets/profile.png";
import { Experience } from "./Experience";

export const About = () => {
  const imageClass = "rounded-full w-full h-full object-cover";
  const imageContainerClass = "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-60 lg:h-60";

  const skills = [
    "MEAN / MERN",
    "Angular / React",
    "Node.js / Express",
    "MongoDB / SQL",
    "C++ (vectors, set, maps, etc.)",
    "TypeScript",
    "HTML, CSS and JavaScript",
    "Tailwind CSS",
  ];

  const hobbies = [
    "Competitive Coding",
    "Chess",
    "Sudoku",
    "Table Tennis",
    "Guitar",
    "Kabaddi",
  ];

  return (
    <div className="min-h-screen w-full bg-transparent backdrop-blur-sm overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto p-6 sm:p-8 gap-8 items-start">
        
        {/* Row 1 - ABOUT + SKILLS */}
        <div className="lg:col-span-2">
          <AnimatedContent>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-800/40 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              {/* Avatar */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <AvatarCard
                  src={ProfileImage}
                  imageClass={imageClass}
                  imageContainerClass={imageContainerClass}
                />
              </div>

              {/* About Text */}
              <div className="text-gray-200 text-center md:text-left flex-1 md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Hi, I'm{" "}
                  <span className="font-semibold text-[aquamarine]">
                    Vaibhav Prakash Saraf
                  </span>
                  , a Web Developer specializing in MEARN (MERN & MEAN) stack
                  projects. With 1.5+ years of professional experience in
                  Angular and hands-on exposure to React, Node.js, Express, and
                  MongoDB, I focus on building scalable, high-performance
                  applications. At GoDigit Insurance, I enhanced health claim
                  workflows, improved UI performance, and developed impactful
                  features like auto-allocation and claims management. I’m
                  passionate about creating efficient, user-centered web
                  solutions and continuously learning in collaborative
                  environments.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className="flex flex-col">
          <AnimatedContent>
            <div className="bg-cyan-600/70 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base md:text-lg">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>

        {/* Row 2 - EXPERIENCE + HOBBIES */}
        <div className="lg:col-span-2">
          <AnimatedContent>
            {/* <div className="bg-gray-700/40 p-6 sm:p-8 rounded-2xl text-white shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Experience</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Working on enterprise-grade health claim systems and building
                robust frontend architectures using Angular and React.
                Experienced in creating dynamic dashboards, scalable APIs, and
                performance-focused UI components.
              </p>
            </div> */}
            <div className="bg-gray-700/40 p-6 h-[300px] sm:p-8 rounded-2xl text-white shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
            <Experience />
            </div>
          </AnimatedContent>
        </div>

        <div className="flex flex-col">
          <AnimatedContent>
            <div className="bg-cyan-600/70 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Hobbies</h2>
              <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base md:text-lg">
                {hobbies.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};
