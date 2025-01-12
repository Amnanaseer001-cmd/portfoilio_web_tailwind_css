import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div className="flex">
        <div className="w-56 h-screen bg-[#1b1b1b] border-r-2 border-gray fixed">
          <div className="pt-10">
            <img
              src="main-img.png"
              className="w-36 ml-10 border-[4px] border-[#ff2460] rounded-full hover:transition-transform duration-300 hover:scale-110"
            />
            <h3 className="font-sans text-white font-semibold text-center mt-2 text-[22px]">
              Amna Naseer
            </h3>
            <p className="font-sans text-[#ff2460] font-semibold text-center mt- text-[14px]">
              Web Developer
            </p>

            <ul className="mt-16 text-md text-center text-white">
              <Link href={"/"}>
                <li className="mb-6 hover:text-[#ff2460]">Home</li>
              </Link>
              <Link href={"/about"}>
                <li className="mb-6 hover:text-[#ff2460]">About</li>
              </Link>

              <Link href={"/portfolio"}>
                <li className="mb-6 hover:text-[#ff2460]">Portfolio</li>
              </Link>
              <Link href={"/contact"}>
                <li className="mb-6 hover:text-[#ff2460]">Contact</li>
              </Link>
            </ul>
            <p className="font-sans text-[#ff2460] font-semibold text-center mt-20 text-[14px]">
              Available for work
            </p>

            <div className="flex gap-2 size-5 mt-4 ml-14 ">
             
              
                <img
                  src="yti.png"
                  alt="youtube"
                  className="hover:border-2 rounded-full hover:border-[#ff2460] hover:bg-[#ff2460]"
                />
             
              <img
                src="lini.png"
                alt="linkdin"
                className="hover:border-2 rounded-full hover:border-[#ff2460] hover:bg-[#ff2460]"
              />
              <img
                src="gi.png"
                alt="github"
                className="hover:border-2 rounded-full hover:border-[#ff2460] hover:bg-[#ff2460]"
              />
              <img
                src="wi.png"
                alt="wtsp"
                className="hover:border-2 rounded-full hover:border-[#ff2460] hover:bg-[#ff2460]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
