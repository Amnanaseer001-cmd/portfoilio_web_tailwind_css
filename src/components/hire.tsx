"use client";
import { useRouter } from "next/navigation";
export default function Hire() {
  const route = useRouter();
  return (
    <>
      <div className="mt-36 w-full h-52 bg-slate-100 flex justify-between mb-20">
        <div className="ml-56 mt-14 ">
          <h1 className="pt- ml-24 text-4xl text-[#1b1b1b] font-bold font-sans">
            Let's work together!
          </h1>
          <p className="pt-4 ml-24 text-1xl text-gray-800 font-semibold font-sans">
            I am available for projects. Hire me and get your project done.
          </p>
        </div>
        <div>
          <button
            className="mt-20 mr-32 w-32 h-10 bg-[#ff2460] rounded-full text-[16px] text-white hover:bg-[#1b1b1b] hover:text-white"
            onClick={() => route.push("/contact")}>
            Hire me
          </button>
        </div>
      </div>
    </>
  );
}
