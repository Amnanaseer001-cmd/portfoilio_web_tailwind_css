export default function Contact() {
  return (
    <>
      <div>
        <div className="ml-64 mt-16 mb-20">
          <h1 className="mt-10 ml-20 text-4xl text-white font-bold font-sans">
            Get in<span className="text-[#ff2460]"> Touch</span>
          </h1>
          <p className="mt-4 ml-20 text-1xl text-gray-300 font-semibold font-sans">
            Feel free to contact me anytime
          </p>
          <div>
            <form className="mt-10 ml-16 space-x-2 space-y-10">
              <input
                type="text"
                placeholder="Name"
                className="ml-2 w-[450px] h-9 rounded-md p-2 text-[12px] bg-gray-50"
              />

              <input
                type="text"
                placeholder="Email"
                className="w-[450px] h-9 rounded-md p-2 text-[12px] bg-gray-50"
              />
              <input
                type="text"
                placeholder="Subject"
                className="mt-12 w-[910px] h-16 rounded-md p-2 text-[12px] bg-gray-50"
              />
              <input
                type="text"
                placeholder="Message"
                className="mt-12 w-[910px] h-20 rounded-md p-2 text-[12px] bg-gray-50"
              />
            </form>
            <button className="ml-20 mt-8 w-36 h-8 bg-[#ff2460] rounded-3xl text-[14px] font-sans text-white hover:bg-white hover:text-black">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
