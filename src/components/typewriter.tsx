"use client";

import { useTypewriter } from "react-simple-typewriter";

const TypingText: React.FC = () => {
  const [text] = useTypewriter({
    words: ["I'm a Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="text-4xl font-extrabold text-center pt-4 text-white font-mono">
      {text}
    </div>
  );
};

export default TypingText;
