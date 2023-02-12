import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import banner from "../assets/images/bg.jpeg";
import Footer from "../Components/Footer";
import Stats from "../Components/stats";
import { pickRequest } from "../service/pickRequest";
import CallUs from "../Components/CallUs";
import swal from "sweetalert";

const UserLanding = () => {
  const reqUser = useRef();
  const email = useRef();
  const userAddress = useRef();
  const contact = useRef();

  const requestFunc = async (e) => {
    e.preventDefault()
    const reqUserValue = reqUser.current.value;
    const emailValue = email.current.value;
    const userAddressValue = userAddress.current.value;
    const contactValue = contact.current.value;

    try {
      if (
        reqUserValue === "" ||
        emailValue === "" ||
        userAddressValue === "" ||
        contactValue === ""
      ) {
        throw new Error("Please fill all the fields");
      }
      const result = await pickRequest({
        reqUserValue,
        emailValue,
        userAddressValue,
        contactValue,
      });
      swal("Request Sent!", "We will contact you soon!", "success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="fixed bottom-0 right-0 m-4">
        <CallUs/>
      </div>

      {/* hero section  */}
      <div
        className='h-full flex'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container max-w-7xl m-auto flex flex-col py-16 gap-8">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-white text-sm md:text-md md:w-1/2 w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              est pariatur voluptatum. At commodi inventore repudiandae.
            </p>
          </div>
          <div className="mx-auto w-full px-4">
            <div className="md:w-2/5 bg-white flex flex-col md:mx-auto w-full p-8 my-4 rounded-lg shadow-lg">
              <div className="text-darkGreen text-2xl text-center mb-6 font-semibold title-font">
                Request Pickup Service
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  ref={reqUser}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  ref={email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="number" className="leading-7 text-sm text-gray-600">
                  Contact No.
                </label>
                <input
                  ref={contact}
                  type="number"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="text" className="leading-7 text-sm text-gray-600">
                  Address
                </label>
                <input
                  ref={userAddress}
                  type="text"
                  id="address"
                  name="address"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={requestFunc}
                className="text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-darkGreen rounded text-lg"
              >
                Pick Waste
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* stats section */}
      <Stats />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLanding;
