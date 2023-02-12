import React from "react";
import bg from "../../assets/images/store/bg2.jpg"

const HeroSection = () => {
  return (
    <div className="container max-w-7xl mx-auto my-4 md:p-0 p-4">
      <div className="w-full px-8 py-32 rounded-xl flex flex-col justify-center items-center gap-2 shadow-md" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-gray-800 text-4xl font-bold font-serif text-center">Recycle, Reduce, Redelete</div>
        <p className="md:w-1/2 w-3/4 mx-auto text-center text-gray-600">Waste ke saath bhi, Recycle ke baad bhi...</p>
        <button className="bg-green hover:bg-darkGreen py-2 px-8 my-2 rounded-lg shadow-lg text-white">Explore</button>
      </div>
    </div>
  );
};

export default HeroSection;
