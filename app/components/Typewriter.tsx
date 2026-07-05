"use client";

import TypewriterComponent from "typewriter-effect";

export default function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "Engineer · Builder · Figure-outer",
          "Building from Africa.",
          "Security · Systems · Scale.",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}