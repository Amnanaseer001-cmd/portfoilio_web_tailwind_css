export default function Expertise() {
  return (
    <>
      <div className="ml-56 mt-36">
        <div className="ml-20 mt-24">
          <h1 className="mt-10 ml-2 text-4xl text-white font-bold font-sans">
            My<span className="text-[#ff2460]"> Expertise</span>
          </h1>

          <p className="mt-6 ml-2 text-[18px] text-gray-300 font-semibold font-sans">
            I&apos; m proficient in the below Technologies
          </p>
        </div>
        <div>
          <div className="mt-10 ml-24 flex gap-14">
            <div>
              <img
                src="html.png"
                alt="html"
                className="mt-10 w-28 h-28 bg-slate-50 border-4 border-[#ff2460] rounded-full p-2
                 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                HTML
              </h2>
            </div>
            <div>
              <img
                src="css2.png"
                alt="html"
                className="mt-10 w-28 h-28 bg-slate-50 border-4 border-[#ff2460] rounded-full p-2 
                 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                CSS
              </h2>
            </div>
            <div>
              <img
                src="js2.png"
                alt="js"
                className="mt-10 w-28 h-28 bg-slate-50 border-4 border-[#ff2460] rounded-full p-2 
                 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                JAVASCRIPT
              </h2>
            </div>
            <div>
              <img
                src="ts2.png"
                alt="ts"
                className="mt-10 w-28 h-28  bg-slate-50 border-4 border-[#ff2460] rounded-full p-2 
                 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                TYPESCRIPT
              </h2>
            </div>
            <div>
              <img
                src="r2.png"
                alt="react"
                className="mt-10 w-28 h-28 bg-slate-50 border-4 border-[#ff2460] rounded-full p-2 
                 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                REACT
              </h2>
            </div>
            <div>
              <img
                src="node2.png"
                alt="nodejs"
                className="mt-10 w-28 h-28 bg-slate-50 border-4 border-[#ff2460] rounded-full p-2  
                transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-white font-semibold text-[14px] text-center mt-2 font-sans">
                NODE.JS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
