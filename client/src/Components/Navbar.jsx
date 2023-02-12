import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/InABin.png";
import coin from "../assets/images/rating-white.svg";

const Navbar = () => {
  const [coins, setCoins] = React.useState(0);
  React.useEffect(() => {
    const get = async () => {
      const id = localStorage.getItem("userId");
      const res = await getAnalytics(id);
      if (res) setCoins(res.data.p);
    };
    get();
  }, []);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 w-full z-20 border-b border-gray-200">
      <div className="container max-w-7xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="#" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2 items-center gap-4">
          <div className="   items-center gap-1 hidden md:flex">
            <img src={coin} alt="" className="w-5 bg-green rounded-full h-5" />
            <div>{coins}</div>
          </div>
          <Link
            to="/store"
            className="text-white bg-green hover:bg-darkGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Visit Store
          </Link>
          <Link to='/login' className="hidden md:block hover:text-green">Logout</Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-green"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/user/requests"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-green"
              >
                Requests
              </Link>
            </li>
            <li>
              <a
                href="/user/profile"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-green"
              >
                Profile
              </a>
            </li>
            <li>
              <Link to='/login' className="py-2 pl-3 md:hidden block pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-green">Logout</Link>
            </li>
            <li>
              <div className="items-center gap-2 flex md:hidden px-2 my-3">
                <img
                  src={coin}
                  className="h-5 bg-green w-5 rounded-full"
                  alt=""
                />
                <div>{coins}</div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
