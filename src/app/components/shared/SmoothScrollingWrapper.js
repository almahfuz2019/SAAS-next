"use client";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollingWrapper = ({ children }) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    let scrollbarInstance;
    if (scrollbarRef.current) {
      // Initialize smooth scrollbar on the ref element
      scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
        damping: 0.07, // Control the scroll smoothness
      });
    }

    // Clean up the scrollbar when component unmounts
    return () => {
      if (scrollbarInstance) {
        scrollbarInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={scrollbarRef}
      style={{
        height: "100vh", // Ensures the container takes up the full viewport height
        overflow: "hidden", // Hide native scrollbars
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollingWrapper;
