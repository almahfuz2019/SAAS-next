"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    console.log("Client-side AOS init");
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true });
    } else {
      console.error("Window is undefined. Running on the server.");
    }
  }, []);

  return null; // Render nothing since this component is for initialization only
}
