
export default function Portfolio() {
  return (
    <>
      <div>
        <div className="ml-56 mt-16">
          <h1 className="mt-10 ml-24 text-4xl text-white font-bold font-sans">
            Port<span className="text-[#ff2460]">folio</span>
          </h1>
          <p className="mt-4 ml-24 text-1xl text-gray-300 font-semibold font-sans">
            Showcasing some of my best work
          </p>

          <div className="mt-14">
            <div className="flex flex-col items-center min-h-[250px] p-4 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="relative group overflow-hidden shadow-lg mb-8">
                  <img
                    src="1.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300">
                    <h2 className="text-[16px] font-medium font-sans border-b-2 border-[#ff2460] rounded-md">
                      Coffee Shop Website
                    </h2>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="relative group overflow-hidden shadow-lg mb-8  ">
                  <img
                    src="9.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 ">
                    <h2 className="text-[16px] font-semibold font-sans border-b-2 border-[#ff2460] rounded-md">
                      Cake e-commerce Website
                    </h2>
                  </div>
                </div>
                {/* Card 3*/}
                <div className="relative group overflow-hidden shadow-lg mb-8  ">
                  <img
                    src="2.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 ">
                    <h2 className="text-[16px] font-semibold font-sans border-b-2 border-[#ff2460] rounded-md">
                      Furniture Website
                    </h2>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative group overflow-hidden shadow-lg ">
                  <img
                    src="4.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 ">
                    <h2 className="text-[16px] font-semibold font-sans border-b-2 border-[#ff2460] rounded-md">
                      Al-Baik Website
                    </h2>
                  </div>
                </div>
                {/* Card 5*/}
                <div className="relative group overflow-hidden shadow-lg  ">
                  <img
                    src="3.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 ">
                    <h2 className="text-[16px] font-semibold font-sans border-b-2 border-[#ff2460] rounded-md">
                      Nadra's Website
                    </h2>
                  </div>
                </div>
                {/* Card 6*/}
                <div className="relative group overflow-hidden shadow-lg  ">
                  <img
                    src="5.png"
                    alt="Card 1"
                    className="w-[300px] h-[190px]"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 ">
                    <h2 className="text-[16px] font-semibold font-sans border-b-2 border-[#ff2460] rounded-md">
                      Landing Page
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
