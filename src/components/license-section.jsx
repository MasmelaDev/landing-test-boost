
export const LicenseSection = () => {
  return (
    <section className="px-5 md:px-10 pt-10 mb-12 max-w-7xl mx-auto">
    <h2 className="text-2xl text-center font-bold mb-8">
      Choose the license that suits your needs
    </h2>
    <div className="flex flex-col items-start sm:flex-row justify-center gap-5">
      <article className="rounded-lg w-full shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] bg-white sm:w-1/3">
        <header className="flex flex-col gap-5 items-center p-5 mb-2 bg-[#f8f9fa]">
          <h3 className="text-xl md:text-2xl font-merriweather">
            Standard
          </h3>
          <span className="">
            <span className="text-lg relative top-[3px] font-medium">
              $
            </span>
            <span className="text-3xl md:text-4xl font-bold font-merriweather">
              49
            </span>
          </span>
          <span className="text-gray-500 md:text-lg">Single Site</span>
        </header>
        <ul className=" font-light flex flex-col gap-6 px-2 text-center items-center pt-6 pb-12 sm:min-h-72">
          <li>Use on one site</li>
          <li>Use for personal or a client</li>
          <li>Technical support</li>
          <li className="mt-6">
            <a
              className="border border-blueBoost rounded-full text-blueBoost text-sm font-medium py-4 shadow-md shadow-gray-600/40 hover:bg-[#0154ca] hover:shadow-none hover:text-white transition-all px-6 mx-auto bg-white "
              href="#"
            >
              BUY NOW
            </a>
          </li>
        </ul>
      </article>
      <article className="rounded-lg w-full shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] bg-white sm:w-1/3 border-4 overflow-hidden border-blueBoost">
        <header className="flex flex-col gap-5 items-center p-5 mb-2 bg-[#f8f9fa]">
          <h3 className="text-xl md:text-2xl  font-merriweather">
            Multisite
          </h3>
          <span className="">
            <span className="text-lg relative top-[3px] font-medium">
              $
            </span>
            <span className="text-3xl md:text-4xl font-bold font-merriweather">
              149
            </span>
          </span>
          <span className="text-gray-500 md:text-lg">
            Unlimited Sites
          </span>
        </header>
        <ul className=" font-light flex flex-col gap-6 sm:gap-8 px-2 text-center items-center pt-6 pb-12 sm:pb-14 sm:min-h-72">
          <li>Use on unlimited sites</li>
          <li>Use for personal or a client</li>
          <li>Technical support</li>
          <li className="mt-6">
            <a
              className="border border-blueBoost rounded-full text-white text-sm font-medium py-4 shadow-md shadow-gray-600/40 hover:bg-[#0154ca] hover:shadow-none hover:text-white transition-all px-6 mx-auto bg-blueBoost"
              href="#"
            >
              BUY NOW
            </a>
          </li>
        </ul>
      </article>
      <article className="rounded-lg w-full shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] bg-white sm:w-1/3">
        <header className="flex flex-col gap-5 items-center p-5 mb-2 bg-[#f8f9fa]">
          <h3 className="text-xl md:text-2xl font-merriweather">
            Extended
          </h3>
          <span className="">
            <span className="text-lg relative top-[3px] font-medium">
              $
            </span>
            <span className="text-3xl md:text-4xl font-bold font-merriweather">
              490
            </span>
          </span>
          <span className="text-gray-500 md:text-lg">
            For paying users
          </span>
        </header>
        <ul className=" font-light flex flex-col gap-6 px-2 text-center items-center pt-6 pb-12 sm:min-h-72">
          <li>Use on one site</li>
          <li>Paying users allowed</li>
          <li>Technical support</li>
          <li className="mt-6">
            <a
              className="border border-blueBoost rounded-full text-blueBoost text-sm font-medium py-4 shadow-md shadow-gray-600/40 hover:bg-[#0154ca] hover:text-white hover:shadow-none px-6 mx-auto transition-all bg-white"
              href="#"
            >
              BUY NOW
            </a>
          </li>
        </ul>
      </article>
    </div>
  </section>
  )
}
