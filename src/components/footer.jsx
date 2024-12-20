import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
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
  )
}
