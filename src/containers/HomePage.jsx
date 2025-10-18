import React from "react";

export const Home = () => {
  return (
    <div className="fixed sm:top-22 md:top-24 lg:top-26 xl:top-28 2xl:top-23 sm:left-8 md:left-10 lg:left-12 xl:left-14 2xl:left-16 top-20 left-6 flex flex-col gap-4 max-w-md text-left">  
      <h2 className="text-2xl font-bold">Summary</h2>
      <p className="text-base leading-relaxed">
        Hi, I'm Vaibhav Prakash Saraf. I am a Web Developer focused on <strong className="text-red-300"> MEARN
            <span className="text-green-400"> (MERN & MEAN)</span>
            </strong>
        (MongoDB, Express, React/Angular, Node) Stack Projects. Ex-Digit Insurance
        Employee with 1.5+ years of professional experience.
      </p>
    </div>
  );
};
