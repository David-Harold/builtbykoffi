"use client";

import TypewriterComponent from "typewriter-effect";

export default function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: [
           "Engineer · Builder · Figure-outer",
           "Finance · Infrastructure · Digitalization",
           "Building from Africa.",
           "Systems · Scale · People",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}