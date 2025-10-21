import { ExperienceCard } from "../../components/ExperienceCard";
import DigitLogo from "../../assets/digit_logo.jpeg";
import PersonalLogo from "../../assets/github.jpeg";
import CareerBreakLogo from "../../assets/personal.svg";

export const Experience = () => {
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
      skills: ["Angular", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      link : "https://vps6003.github.io/e-comm-store---frontend-webapp/",
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
      skills : ["Self-Discipline" , "Analysis" , "Time-Management"],
      link :"",
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
      skills: ["AngularJS", "TypeScript", "REST API", "BootsTrap", "PostgreSQL", "UI Design"],
      link: ""
    },
  ];

  return (
    <section className="rounded-xl py-4 px-2 sm:px-4 md:px-8 lg:px-12 bg-gray-700 backdrop-blur min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[150px] xl:min-h-[160px]">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center sm:text-left underline">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full max-w-[100%]"
          >
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
};
