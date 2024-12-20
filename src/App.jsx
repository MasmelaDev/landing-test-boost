import { Navbar } from "./components/nav-bar";
import {
  FaUniversalAccess,
  FaMobileScreenButton,
  FaSass,
  FaNpm,
  FaCode,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { Accordion } from "./components/accordion";
import { questions } from "./data/questions";
function App() {
  return (
    <>
      <header className="mb-8 md:px-10">
        <Navbar />
      </header>
      <main className="">
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
        <section className="relative pb-16 lg:pb-24 pt-10 lg:py-20 flex flex-col px-5 md:px-10 items-center mb-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -skew-y-6 lg:-skew-y-3 origin-top-left -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:auto-cols-max xl:grid-cols-[repeat(2,_minmax(0,_620px))]  justify-center gap-12 mb-10 lg:mb-0 max-w-lg md:max-w-full ">
            <a
              href="#"
              className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather hover:-top-3 duration-500 relative transition-all"
            >
              <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] ">
                <img
                  src="/app.png"
                  className="w-full h-full object-contain max-h-[540px]"
                />
              </div>
              App
            </a>
            <a
              href="#"
              className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather hover:-top-3 duration-500 relative transition-all"
            >
              <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] ">
                <img
                  src="/course.png"
                  className="w-full h-full object-contain max-h-[540px]"
                />
              </div>
              Course
            </a>
            <a
              href="#"
              className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather hover:-top-3 duration-500 relative transition-all"
            >
              <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] ">
                <img
                  src="/event.jpg"
                  className="w-full h-full object-contain max-h-[540px]"
                />
              </div>
              Event
            </a>
            <a
              href="#"
              className="flex flex-col gap-5 items-center text-xl font-semibold font-merriweather hover:-top-3 duration-500 relative transition-all"
            >
              <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] ">
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 md:px-10 mb-12 max-w-7xl mx-auto">
          <div className="mb-5 flex flex-col gap-4 ">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a] "
            >
              <FaUniversalAccess className="text-blueBoost" size={24} />
            </div>
            <h2 className="text-xl font-bold ">Accessible</h2>
            <p className="md:text-lg">
              Built with accessibility in mind and following best practices.
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-4">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a]"
            >
              <FaMobileScreenButton className="text-blueBoost" size={24} />
            </div>
            <h2 className="text-xl font-bold ">Mobile First</h2>
            <p className="md:text-lg">
              Mobile-first flexbox grid to build layouts of all shapes and
              sizes.
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-4">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a]"
            >
              <FaFontAwesomeFlag className="text-blueBoost" size={24} />
            </div>
            <h2 className="text-xl font-bold ">Font Awesome</h2>
            <p className="md:text-lg">
              More than 1600 vector icons from the web&apos;s most popular icon
              set.
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-4">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a]"
            >
              <FaSass className="text-blueBoost" size={28} />
            </div>
            <h2 className="text-xl font-bold ">Sass Files</h2>
            <p className="md:text-lg">
              Easily customize your site by modifying the source scss files.
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-4">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a]"
            >
              <FaNpm className="text-blueBoost" size={28} />
            </div>
            <h2 className="text-xl font-bold ">Npm</h2>
            <p className="md:text-lg">
              Automated workflow for your development tasks.
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-4">
            <div
              className="rounded-full w-12 h-12 p-2.5 flex justify-center
             items-center bg-[#0163ee1a]"
            >
              <FaCode className="text-blueBoost" size={28} />
            </div>
            <h2 className="text-xl font-bold ">Valid Code</h2>
            <p className="md:text-lg">
              W3C valid code to ensure the site works properly on all browsers.
            </p>
          </div>
        </section>
        <div className="w-12 bg-blueBoost mx-auto mb-12 border-b-2 border-b-blueBoost"></div>
        <section className=" px-5 md:px-10 mb-20 max-w-7xl mx-auto">
          <article className="bg-white flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="md:w-1/2 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Accessibility-ready
              </h2>
              <p className="text-gray-600 mb-5 md:text-xl">
                Boost theme is navigable with a keyboard, ready for screen
                readers, and uses a high color contrast ratio.
              </p>
              <a
                href="#"
                className="tracking-widest border-b-2 border-blueBoost hover:text-blueBoost transition-all pb-1 text-sm sm:text-base"
              >
                READ MORE
              </a>
            </div>

            <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] md:w-1/2">
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

            <div className="bg-[#f8f9fa] p-3 w-full rounded-md shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] md:w-1/2">
              <img
                src="/install.png"
                className="w-full h-full object-contain max-h-[540px]"
              />
            </div>
          </article>
        </section>
        <div className="relative mb-12">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -skew-y-6 lg:-skew-y-3 origin-top-left -z-10"></div>
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
          <div className="w-12 bg-blueBoost mx-auto mb-12 border-b-2 border-b-blueBoost"></div>
          <section className="px-5 md:px-10 pb-12">
            <h2 className="text-2xl text-center font-bold mb-8">Questions</h2>
            <div className="">
              <Accordion items={questions} />
            </div>
          </section>
        </div>
        <footer className="px-5 md:px-10 pb-5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 pb-5 border-b-2 mb-4 ">
            <div>
              <h2 className="font-bold text-lg mb-3 ">Boost Theme</h2>
              <p className="font-light text-gray-600 mb-5">
                Boost is a responsive theme based on Bootstrap 5.
              </p>
            </div>
            <div className="mb-4 w-full">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                <li>
                  <h3 className="text-lg font-bold mb-3">About</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-gray-600">
                      <a href="#">About Us</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Team</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-lg font-bold mb-3">Services</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-gray-600">
                      <a href="#">Design</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Themes</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">branding</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-lg font-bold mb-3">Help</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-gray-600">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Docs</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-lg font-bold mb-3">Contact</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-gray-600">
                      <a href="#">Contact</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Email</a>
                    </li>
                    <li className="text-gray-600">
                      <a href="#">Chat</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm">
              &copy; Made by{" "}
              <a href="#" className="text-blueBoost underline">
                webvy
              </a>
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-200 grid place-content-center rounded-full h-8 w-8 text-gray-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-gray-200 grid place-content-center rounded-full h-8 w-8 text-gray-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-200 grid place-content-center rounded-full h-8 w-8 text-gray-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
