
export const PageSection = () => {
  return (
    <section className="relative pb-16 lg:pb-24 pt-10 lg:py-20 flex flex-col px-5 md:px-10 items-center mb-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -skew-y-6 lg:-skew-y-3 origin-top-left -z-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:auto-cols-max xl:grid-cols-[repeat(2,_minmax(0,_620px))]  justify-center gap-12 mb-10 lg:mb-0 max-w-lg md:max-w-full ">
        <a
          href="#"
          className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather transform transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] ">
            <img
              src="/app.png"
              className="w-full h-full object-contain max-h-[540px]"
            />
          </div>
          App
        </a>
        <a
          href="#"
          className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather transform transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] ">
            <img
              src="/course.png"
              className="w-full h-full object-contain max-h-[540px]"
            />
          </div>
          Course
        </a>
        <a
          href="#"
          className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather transform transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] ">
            <img
              src="/event.jpg"
              className="w-full h-full object-contain max-h-[540px]"
            />
          </div>
          Event
        </a>
        <a
          href="#"
          className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather transform transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]  group-hover:shadowp">
            <img
              src="/saas.png"
              className="w-full h-full object-contain max-h-[540px]"
            />
          </div>
          SaaS
        </a>
      </div>
      <a
        href="#"
        className="bg-blueBoost text-white py-4 px-8 absolute bottom-3  rounded-full tracking-wider text-sm md:text-base shadow-md shadow-gray-600/40 hover:bg-[#0154ca] hover:shadow-none transition-all"
      >
        VIEW ALL PAGES
      </a>
    </section>
  );
};
