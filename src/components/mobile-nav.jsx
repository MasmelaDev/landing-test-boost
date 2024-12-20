// eslint-disable-next-line react/prop-types
export const MobileNav = ({ isOpen }) => {
  return (
    <>
        <div
          style={{ maxHeight: isOpen ? "250px" : "0px" }}
        className="w-full mt-5 overflow-hidden transition-all duration-300 ease-linear">
          <ul className="w-full uppercase flex flex-col items-start">
            <li className="w-full border-b hover:text-blueBoost">
              <a className="w-full block pb-4 mt-3" href="#">
                pages
              </a>
            </li>
            <li className="w-full border-b hover:text-blueBoost">
              <a className="w-full block pb-4 mt-3" href="#">
                style
              </a>
            </li>
            <li className="w-full border-b hover:text-blueBoost">
              <a className="w-full block pb-4 mt-3" href="#">
                docs
              </a>
            </li>
            <li className="mt-3 bg-blueBoost text-white py-3 px-5 rounded-full tracking-wider text-sm">
              <a href="#">buy now</a>
            </li>
          </ul>
        </div>
    </>
  );
};
