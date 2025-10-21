export const ExperienceCard = ({
  company,
  logo,
  position,
  location,
  duration,
  type,
  description,
  skills,
}) => {
  return (
    <div className="xl:w-[130%] 2xl:w-[150%] w-full bg-gray-900/60 border border-gray-700 hover:border-gray-500 transition-all duration-300 rounded-2xl w-full shadow-lg">
      <div className="hidden sm:block xl:w-[100%] p-8 flex sm:flex-col gap-4">
        {/* Company Logo */}
        <div className="flex flex-row gap-8">

        {logo && (
          <div className="flex-shrink-0 w-24 h-24  rounded-full overflow-hidden bg-gray-800">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
              />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-2">
        <h3 className="text-xl text-left font-semibold text-white">{company}</h3>

          <div className="flex flex-wrap gap-2">
          <p className="text-md text-gray-300 font-medium">{position} | </p>
          <p className="text-sm text-gray-400">
            {type && <span>{type} • </span>}
            {duration}
          </p>
          {location && <p className="text-sm text-gray-400">{location}</p>}
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-300 text-sm leading-relaxed">
            {description.map((point, index) => (
              <li key={index} className="text-left">{point}</li>
            ))}
          </ul>
          {skills && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                key={index}
                className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Mobile Devices */}
      <div className="block sm:hidden xl:w-[100%] p-5 flex flex-col gap-4">

        {/* Company Logo */}
        <div className="flex flex-row gap-4">
        {logo && (
          <div className="w-8 h-8 flex-shrink-0  rounded-full overflow-hidden bg-gray-800">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
              />
          </div>
        )}
        <h3 className="text-md  text-left font-semibold text-white">{company}</h3>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">

          <div className="flex flex-wrap gap-2">
          <p className="text-md text-gray-300 font-medium">{position} | </p>
          <p className="text-sm text-gray-400">
            {type && <span>{type} • </span>}
            {duration}
          </p>
          {location && <p className="text-sm text-gray-400">{location}</p>}
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-300 text-sm leading-relaxed">
            {description.map((point, index) => (
              <li key={index} className="text-left">{point}</li>
            ))}
          </ul>
          {skills && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

  );
};
