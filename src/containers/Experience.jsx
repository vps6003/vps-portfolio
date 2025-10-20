import { useEffect, useRef, useState } from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import DigitLogo from "../assets/digit_logo.jpeg";
import PersonalLogo from "../assets/github.jpeg";
import CareerBreakLogo from "../assets/personal.svg";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// MUI Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Experience = () => {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect (() =>{
    const handleResize = () =>{
      setIsDesktop( window.innerWidth >= 1024);
    }
    handleResize();
    window.addEventListener("resize",handleResize);
    return() => window.removeEventListener("resize",handleResize);
  },[]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const experiences = [
    {
      company: "Self Employed – Personal Projects",
      logo: PersonalLogo,
      position: "Full Stack Developer",
      location: "Bengaluru, Karnataka, India",
      duration: "Sep 2025 – Present",
      type: "Full-time",
      description: [
        "Developed a full-stack e-commerce web app using the MEAN stack.",
        "Implemented dynamic product management with an admin panel.",
        "Built JWT-based authentication with role-based access.",
        "Created responsive UI using Tailwind CSS for cross-device performance.",
      ],
      skills: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
    },
    {
      company: "Personal Goal Pursuit – Career Break",
      logo: CareerBreakLogo,
      position: "UPSC Civil Services Preparation",
      location: "New Delhi, India",
      duration: "Jan 2024 – Sep 2025",
      description: [
        "Prepared for UPSC Civil Services Examination.",
        "Strengthened analytical and structured problem-solving skills.",
        "Developed disciplined study habits and deep knowledge in governance, polity, and economics.",
      ],
    },
    {
      company: "Digit Insurance",
      logo: DigitLogo,
      position: "Software Engineer",
      location: "Bengaluru, Karnataka, India",
      duration: "Jul 2022 – Dec 2023",
      type: "Full-time",
      description: [
        "Worked on front-end development using AngularJS.",
        "Collaborated with cross-functional teams for feature delivery.",
        "Ensured smooth API integration between front-end and back-end.",
      ],
      skills: ["AngularJS", "TypeScript", "REST API", "Agile", "UI Design"],
    },
  ];

  return (
    <section className="relative py-10 px-5 sm:px-8 md:px-16 lg:px-20 bg-black min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[150px] xl:min-h-[160px]">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center sm:text-left">
        Experience
      </h2>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-8 z-50 !p-0 flex items-center justify-center"
      >
        <ArrowBackIosNewIcon className="bg-black text-cyan-300 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-8 z-50 !p-0 flex items-center justify-center"
      >
        <ArrowForwardIosIcon className="bg-black text-cyan-300 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiper) => {
          // Add manual hover handlers to pause/resume autoplay
          const swiperEl = swiper.el;
          swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
          swiperEl.addEventListener("mouseleave", () =>
            swiper.autoplay.start()
          );
        }}
        className="w-full h-full flex items-center"
      >
        {experiences.map((exp, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full flex   justify-center"
          >
            <div className="w-full max-w-[90%] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
              <ExperienceCard {...exp} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
