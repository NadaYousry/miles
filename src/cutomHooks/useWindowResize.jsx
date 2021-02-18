import React, { useEffect, useState } from "react";
const useWindowResize = () => {

    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [currentWidth, setCurrentWidth] = useState(0);
    useEffect(() => {
      window.addEventListener("load", (e) => {
        if (window.innerWidth < 768) {
          setIsMobileScreen(true);
        } else {
          setIsMobileScreen(false);
        }
      });
      return()=>{
        window.addEventListener("resize", (e) => {
            setCurrentWidth(window.innerWidth);
            if (window.innerWidth < 768) {
              setIsMobileScreen(true);
            } else {
              setIsMobileScreen(false);
            }
          });
      }
     
    });
    return isMobileScreen ; 
};

export default useWindowResize;
