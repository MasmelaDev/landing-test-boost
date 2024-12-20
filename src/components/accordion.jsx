/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const changeActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {items.map((item, index) => (
        <div
          className={`mb-2 shadow-md shadow-black/10 ${
            index === 0 && "rounded-t-lg"
          } ${index === items.length - 1 && "rounded-b-lg"} max-w-3xl w-full`}
          key={index}
        >
          <button
            className={`${
              index === activeIndex ? "bg-blueBoost/15" : "bg-white"
            } ${
              index === 0 && "rounded-t-lg"
            } ${index === items.length - 1 && "rounded-b-lg"} focus:outline-4 focus:outline focus:outline-blueBoost/25 p-6 cursor-pointer flex justify-between items-center gap-2 py-8 hover:bg-blueBoost/15 transition-all w-full hover:text-blueBoost`}
            onClick={() => changeActiveIndex(index)}
          >
            <h3 className="text-xl font-bold text-left">{item.title}</h3>
            <span
              className={`${
                activeIndex === index && "rotate-180"
              } transition-all`}
            >
              <FaChevronDown />
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300 ease-in-out bg-white"
            style={{
              maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
            }}
          >
            <p className="p-6 leading-6">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
