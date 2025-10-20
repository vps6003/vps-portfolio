import { AnimatedContent } from "../components/animations/AnimatedContent";
import { AvatarCard } from "../components/AvatarCard";
import ProfileImage from "./../assets/profile.png"


export const Home = () => {
  const exportClass =
    "fixed max-w-3xl sm:top-22 md:top-24 lg:top-26 xl:top-28 2xl:top-23 sm:left-8 md:left-10 lg:left-12 xl:left-14 2xl:left-16 top-20 left-6 flex flex-col gap-8 text-left";
  return (
    <>
      <AnimatedContent className={exportClass}>
        <AvatarCard src={ProfileImage} />
      </AnimatedContent>
    </>
  );
};
