
export const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-5 mb-10 px-6 md:px-10">
    <div className="max-w-2xl ">
      <div className="text-center lg:text-left mb-8">
        <h1 className="text-4xl lg:text-6xl px-2 mb-8">
          Boost your digital presence
        </h1>
        <p className="text-xl lg:text-2xl font-light text-gray-500">
          Build an excellent website with a clean and accessible Bootstrap
          theme.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-center lg:justify-start justify-center gap-6">
        <a
          href="#"
          className="bg-blueBoost text-white py-4 px-8 lg:px-6 rounded-full tracking-wider text-sm lg:text-base shadow-md shadow-gray-600/40 hover:bg-[#0154ca] transition-all hover:shadow-none"
        >
          VIEW ALL PAGES
        </a>
        <a
          href="#"
          className="tracking-widest border-b-2 border-blueBoost hover:text-blueBoost transition-all pb-1 text-sm lg:text-base"
        >
          READ THE DOCS
        </a>
      </div>
    </div>
    <div className="lg:block hidden ">
      <img
        src="/revenue.svg"
        alt="revenue"
        className="w-full h-full object-cover"
      />
    </div>
  </section>
  )
}
