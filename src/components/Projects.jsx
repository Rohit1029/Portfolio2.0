import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      demo:"https://online-voting-1-nk8u.onrender.com/",
      str:"E-Vote",
      code:"https://github.com/Rohit1029/E-Vote",
      
    },
    {
      id: 2,
      src: reactParallax,
      demo:"https://mern-estate2-0.onrender.com/",
      str:"Estate",
      code:"https://github.com/Rohit1029/MERN_ESTATE2.0",
      
    },
    {
      id: 3,
      src: navbar,
      demo:"https://react-frontend-project-git-main-rohits-projects-176eb558.vercel.app/",
      str:"E-Food",
      code:"https://github.com/Rohit1029/React_Frontend_Project",
      
    },
    {
      id: 4,
      src: reactSmooth,
      demo:"#",
      str:"E-Store",
      code:"https://github.com/Rohit1029/zoop/tree/main/zoop-master",
      
    },
    {
      id: 5,
      src: installNode,
      demo:"https://rohit1029.github.io/QR_Generator/",
      str:"QR gen.",
      code:"https://github.com/Rohit1029/QR_Generator",
      
    },
    {
      id: 6,
      src: reactWeather,
      demo:"https://www.geeksforgeeks.org/user/rohitkumar1028c/",
      str:"Coding",
      code:"#",
      
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800  text-white w-full h-auto"
    >
      <div className=" w-8/12 max-w-full-lg p-4 mx-auto flex flex-col justify-center  h-full">
        <div className="pb-8  md:mt-32">
          <p className="text-4xl font-bold inline border-b-4 w-full text-center border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,code,demo,str}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col">
              <img
                src={src}
                alt=""
                className="rounded-md w-auto h-auto duration-200 hover:scale-105"
              />
              <div className="flex flex-col md:flex-row items-center justify-around my-6">
               <a href={demo} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2   duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <p className="text-center text-green-700 font-medium ">
        {str}
      </p>

                <a href={code} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2  duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
