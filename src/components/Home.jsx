import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
    <div
      name="home"
      className=" h-auto w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-full-lg mx-auto flex flex-col items-center  justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col-reverse items-center  justify-center h-full px-4 md:flex-row pt-10 sm:pt-20 lg:pt-32 pb-14 ">
        <div className=" flex flex-col justify-center h-1/2">
          <h2 className="text-xl text-center mt-6 md:mt-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white ">
            I'm a Software <br></br> Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hey!! This is Rohit Kumar, 4th year undergraduate at National Institute of Technology Silchar in the department of Electronics & Communication Engineering. I'm an enthusiastic and dedicated Software and Web Developer.
          </p>

          <div className=" flex justify-center">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
             
            >
              To Know More
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 lg:hover:animate-bounce "
          />
        </div>
        </div>
        
      </div>
    </div>
    </>
    
  );
};

export default Home;
