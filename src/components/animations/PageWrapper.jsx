export const PageWrapper = ({ children }) => {
  return (
    <div
      className="
        w-full 
        min-h-screen 
        px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 
        py-8 sm:py-10 lg:py-16 
        max-w-7xl 
        mx-auto 
        bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 
        text-white
      "
    >
      {children}
    </div>
  );
};
