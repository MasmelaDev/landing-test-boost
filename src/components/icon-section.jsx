import { FaFontAwesomeFlag } from "react-icons/fa";
import {
  FaUniversalAccess,
  FaMobileScreenButton,
  FaSass,
  FaNpm,
  FaCode,
} from "react-icons/fa6";
export const IconSection = () => {
  return (
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
          Mobile-first flexbox grid to build layouts of all shapes and sizes.
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
          More than 1600 vector icons from the web&apos;s most popular icon set.
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
  );
};
