import { useEffect, useState } from "react";

export const InnerWidth = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect( () =>{
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize",handleResize);
    return () => window.removeEventListener("resize",handleResize);
  },[breakpoint]);
  
  return isMobile;
};
