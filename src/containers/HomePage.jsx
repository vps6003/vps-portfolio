import { AnimatedContent } from "../components/animations/AnimatedContent";
import { HeroCard } from "../components/HeroCard";
import ProfileImage from "./../assets/Profile.png"


export const Home = () => {
  const exportClass =
    "overflow-auto sm:top-22 md:top-24 lg:top-26 xl:top-28 2xl:top-23 sm:left-8 md:left-10 lg:left-12 xl:left-14 2xl:left-16 top-20 left-6 flex flex-col gap-8 text-left";
  return (
    <>
      <AnimatedContent className={exportClass}>
        <HeroCard/>
      </AnimatedContent>
    </>
  );
};
