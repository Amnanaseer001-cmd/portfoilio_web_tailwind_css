"use client";

import { useTypewriter } from "react-simple-typewriter";

const TypeName: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Amna Naseer"],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <div className="text-5xl font-bold text-center pt-4 text-[rgb(255,7,73)] font-sans">{text}</div>
  );
};

export default TypeName;