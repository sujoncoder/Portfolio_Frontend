"use client";

import { Typewriter } from "react-simple-typewriter";

const ByeTypeWriter = () => {
  return (
    <div className="font-bold text-[#5cc48a] hidden sm:block">
      <Typewriter
        words={["ধন্যবাদ", "THANKS", "धन्यवाद", "شکریہ"]}
        loop={true}
        cursor
        cursorStyle="🙏"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </div>
  );
};

export default ByeTypeWriter;
