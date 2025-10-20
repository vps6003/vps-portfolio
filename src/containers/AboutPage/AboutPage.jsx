import { AnimatedContent } from "../../components/animations/AnimatedContent";
import { AvatarCard } from "../../components/AvatarCard";
import ProfileImage from "../../assets/Profile.png";
import { Experience } from "./Experience";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const experienceRef = useRef();

  useEffect(() => {
    if (location.state?.scrollTo === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const imageClass = "rounded-full w-full h-full object-cover";
  const imageContainerClass = "w-24 h-24 sm:w-28 md:w-32";

  const skills = [
    "MEAN / MERN",
    "Angular / React",
    "Node.js / Express",
    "MongoDB / SQL",
    "C++ (vectors, set, maps, etc.)",
    "TypeScript / JavaScript",
    "HTML / CSS",
    "Tailwind CSS",
    "Data Structures",
  ];

  const hobbies = ["Competitive Coding", "Chess", "Sudoku", "Table Tennis", "Guitar", "Kabaddi"];
  const showSwiper = hobbies.length > 3;

  const buttonClass =
    "px-6 py-3 !bg-blue-600 hover:!bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300";

  return (
    <div className="min-h-screen w-full bg-transparent backdrop-blur-sm overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto p-6 sm:p-8 gap-8 items-start">
        {/* Row 1 - ABOUT + SKILLS */}
        <div className="lg:col-span-2">
          <AnimatedContent>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-800/40 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex-1">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <AvatarCard
                  src={ProfileImage}
                  imageClass={imageClass}
                  imageContainerClass={imageContainerClass}
                />
              </div>
              <div className="text-gray-200 text-center md:text-left flex-1 md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Hi, I'm{" "}
                  <span className="font-semibold text-[aquamarine]">
                    Vaibhav Prakash Saraf
                  </span>
                  , a Web Developer specializing in MEARN (MERN & MEAN) stack
                  projects. With 1.5+ years of professional experience in
                  Angular and hands-on exposure to React & Angular, Node.js,
                  Express, and MongoDB, I focus on building scalable,
                  high-performance applications. At GoDigit Insurance, I
                  enhanced health claim workflows, improved UI performance, and
                  developed impactful features like auto-allocation and claims
                  management. I’m passionate about creating efficient,
                  user-centered web solutions and continuously learning in
                  collaborative environments.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className="flex flex-col h-full">
          <AnimatedContent>
            <div className="bg-cyan-600/70 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 underline text-left">
                Skills
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base md:text-lg">
                {skills.map((skill, i) => (
                  <li key={i} className="text-left">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>

        {/* Row 2 - EXPERIENCE */}
        <div className="lg:col-span-4" ref={experienceRef}>
          <AnimatedContent>
            <div className="bg-gray-700/40 p-6 sm:p-8 rounded-2xl text-white shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              <Experience />
            </div>
          </AnimatedContent>
        </div>

        {/* Row 3 - HOBBIES */}
        <div className="lg:col-span-4">
          <AnimatedContent>
            <div className="bg-cyan-600/70 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold whitespace-nowrap text-green-300">
                  Hobbies :
                </h2>

                {!showSwiper && (
                  <ul className="flex flex-wrap items-center ml-2 space-x-4 text-sm sm:text-base md:text-lg">
                    {hobbies.map((hobby, i) => (
                      <li key={i}>{hobby}</li>
                    ))}
                  </ul>
                )}

                {showSwiper && (
                  <div className="flex-1 lg:mt-[6px] min-w-[200px]">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      loop={true}
                      className="w-full"
                    >
                      {hobbies.map((hobby, i) => (
                        <SwiperSlide key={i}>
                          <div className="text-sm sm:text-base md:text-lg">{hobby}</div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Navigation Buttons */}
        <div className="lg:col-span-4 flex flex-wrap gap-4 mt-8">
          <button className={buttonClass} onClick={() => navigate("/home")}>
            Go to Home Page
          </button>
          <button className={buttonClass} onClick={() => navigate("/contact")}>
            Go to Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};
