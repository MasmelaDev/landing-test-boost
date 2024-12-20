
export const FeatureSection = () => {
  return (
    <section className=" px-5 md:px-10 mb-20 max-w-7xl mx-auto">
      <article className="bg-white flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <div className="md:w-1/2 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Accessibility-ready
          </h2>
          <p className="text-gray-600 mb-5 md:text-xl">
            Boost theme is navigable with a keyboard, ready for screen readers,
            and uses a high color contrast ratio.
          </p>
          <a
            href="#"
            className="tracking-widest border-b-2 border-blueBoost hover:text-blueBoost transition-all pb-1 text-sm sm:text-base"
          >
            READ MORE
          </a>
        </div>

        <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]  md:w-1/2">
          <img
            src="/vitruvian-man.png"
            className="w-full h-full object-contain max-h-[540px]"
          />
        </div>
      </article>
      <article className="bg-white flex flex-col md:flex-row-reverse items-start md:items-center gap-6">
        <div className="md:w-1/2 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Easy to install
          </h2>
          <p className="text-gray-600 mb-5 md:text-xl">
            You can install this theme easily using Node Package Manager.
          </p>
          <a
            href="#"
            className="tracking-widest border-b-2 border-blueBoost hover:text-blueBoost transition-all pb-1 text-sm sm:text-base "
          >
            READ MORE
          </a>
        </div>

        <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]  md:w-1/2">
          <img
            src="/install.png"
            className="w-full h-full object-contain max-h-[540px]"
          />
        </div>
      </article>
    </section>
  );
};
