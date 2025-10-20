import {HeroCard} from "./HeroCard";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { AnimatedContent } from "../../components/animations/AnimatedContent";
import { useRef } from "react";

export const Home = () => {

  const profileRef = useRef(null);

  const handleViewProfile = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  

  const sectionClass =
    "overflow-auto sm:top-22 md:top-24 lg:top-26 xl:top-28 2xl:top-23 sm:left-8 md:left-10 lg:left-12 xl:left-14 2xl:left-16 top-20 left-6 flex flex-col gap-12 text-left";

  return (
    <div className="w-full">
      {/* Hero Section */}
        <AnimatedContent className={sectionClass}>
          <section>
            <HeroCard onViewProfile = {handleViewProfile} />
            </section>
          <section>
            <Skills/>          
            </section>
          <section>
            <Experience/>          
            </section>
          <section ref={profileRef}>
            <Projects/>          
            </section>
          <section>
            <Contact/>          
            </section>
        </AnimatedContent>
      </div>     
  );
};
