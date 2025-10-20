import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { HeroCard } from "./HeroCard";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { AnimatedContent } from "../../components/animations/AnimatedContent";

export const Home = () => {
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleViewProfile = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sectionClass =
    "w-full flex flex-col gap-16 px-4 sm:px-8 md:px-12 lg:px-16 py-8 text-left";

  const buttonClass =
    "px-6 py-3 !bg-blue-600 hover:!bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300";

  return (
    <div className="w-full">
      <AnimatedContent className={sectionClass}>
        {/* Hero Section */}
        <section>
          <HeroCard onViewProfile={handleViewProfile} />
        </section>

        {/* Skills Section */}
        <section>
          <Skills />
        </section>

        {/* Experience Section */}
        <section>
          <Experience />
        </section>

        {/* Projects Section (scroll target) */}
        <section ref={profileRef}>
          <Projects />
        </section>

        {/* Contact Section */}
        <section>
          <Contact />
        </section>

        {/* Navigation Buttons */}
        <section className="flex flex-wrap gap-4 justify-center">
          <button
            className={buttonClass}
            onClick={() => navigate("/about")}
          >
            Go to About Page
          </button>
          <button
            className={buttonClass}
            onClick={() => navigate("/contact")}
          >
            Go to Contact Page
          </button>
        </section>
      </AnimatedContent>
    </div>
  );
};
