"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import downloadCV from "./downloadbtn";
export default function About() {
  const route = useRouter();
  return (
    <>
      <div className="flex justify-between bg-[#1b1b1b]">
        <div className="ml-56 mt-2">
          <h1 className="mt-10 ml-20 text-4xl text-white font-bold font-sans">
            About <span className="text-[#ff2460]">Me</span>
          </h1>
          <p className="mt-4 ml-20 text-1xl text-gray-300 font-semibold font-sans">
            Get to know me
          </p>

          <Image
            src="/main-img3.jpg"
            alt="Description of the image"
            layout="responsive"
            width={420}
            height={470}
            className="ml-20 mt-10 rounded-lg border-[1px] border-gray-400 p-1 transition-transform duration-100 hover:scale-110"
          />
        </div>
        <div className="mt-48 mr-16">
          <p className="mt-4 text-[22px] text-[#e7285b] font-medium font-sans">
            Who am i ?
          </p>
          <p className="mt-2 text-[30px] text-white font-bold font-sans">
            I&apos;m Amna Naseer, a visual UX / UI
            <br /> Designer and Web Developer
          </p>
          <p className="mt-4 leading-8 text-[16px] text-gray-300">
            I&apos;m Amna Naseer, a web developer skilled in HTML, CSS, JavaScript{" "}
            <br /> and TypeScript.I'm currently expanding my expertise by
            learning Next.js <br /> and building dynamic project Pursuing a
            Bachelor in Computer Science <br /> I have hands-on experience with
            C++ for software development. <br /> I enjoy creating engaging web
            experiences and am passionate about <br />
            using modern technologies to bring ideas to life. <br />
          </p>

          <div className="flex gap-8">
            <button
              className=" mt-6 w-28 h-8 bg-[#ff2460] rounded-full text-[14px] text-white hover:bg-white hover:text-black"
              onClick={downloadCV}>
              Download CV
            </button>

            <button
              className=" mt-6 w-28 h-8 bg-[#ff2460] rounded-full text-[14px]  text-white  hover:bg-white hover:text-black"
              onClick={() => route.push("/portfolio")}>
              My Work
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
