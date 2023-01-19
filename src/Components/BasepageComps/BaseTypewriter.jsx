import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BaseTypewriter = () => {
  return (
    <>
      <span
        style={{
          fontSize: "32px",
          color: "white",
          fontWeight: "700",
          backgroundColor: "#869150",
        }}
      >
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Fashion", "फैशन", "فیشن", "ਫੈਸ਼ਨ", "ফ্যাশন"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </span>
    </>
  );
};

export default BaseTypewriter;
