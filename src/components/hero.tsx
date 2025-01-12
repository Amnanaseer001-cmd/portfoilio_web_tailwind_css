import TypingText from "./typewriter";
import TypeName from "./typetext";

export default function Hero() {
  return (
    <>
      <div
        className="h-screen w-[100%] bg-cover bg-right-bottom scroll-smooth "
        style={{ backgroundImage: "url('bi3.avif')" }}>
        <h1 className="text-white text-center text-5xl pt-64 font-semibold ">
          <TypeName />
        </h1>
        <h2>
          <TypingText />
        </h2>
      </div>
    </>
  );
}
