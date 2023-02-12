import { useState } from "react";
import close from "../assets/images/close.svg";
import call from "../assets/images/callus.png";
import callGreen from "../assets/images/callGreen.png";

const CallUs = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      {!active && (
        <div
          className="w-16 h-16 rounded-full bg-green hover:bg-darkGreen duration-200 text-white flex justify-center items-center cursor-pointer shadow-lg p-5 z-100"
          onClick={handleClick}
        >
          <img src={call} alt="call" />
        </div>
      )}

      {active && (
        <div className="relative rounded-lg w-64 h-72 bg-white shadow-lg z-100">
          <div
            className="absolute top-0 right-0 p-6 cursor-pointer flex gap-4"
            onClick={handleClick}
          >
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-2 items-center">
                  <img src={callGreen} alt="Call" className="w-4 h-4" />
                  <h1 className="font-medium text-green">Call us</h1>
                </div>
                <div className="py-2">
                  <p className="text-gray-600">8989151788</p>
                  <p className="text-gray-600">8989151788</p>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <img src={callGreen} alt="" className="w-4 h-4" />
                  <h1 className="font-medium text-green">Email</h1>
                </div>
                <div className="py-2">
                  <p className="text-gray-600">sourabh123@gmail.com</p>
                  <p className="text-gray-600">sandesh123@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <img src={close} alt="close" className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallUs;
