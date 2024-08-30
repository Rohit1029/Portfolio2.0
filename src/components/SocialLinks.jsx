import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      name:"LinkedIn",
      href: "https://www.linkedin.com/in/rohit-kumar-4b4259228/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      name:"GitHub",
      href: "https://github.com/Rohit1029",
    },
    
    {
      id: 3,
      child: (
        <>
           <SiCodechef size={30} />
        </>
      ),
      name:"Codechef",

      href: "https://www.codechef.com/users/rohit_780",
    },
    {
      id :4,
      child:(
        <>
        <SiGeeksforgeeks size={30}/>
        </>
      ),
      name:"GfG",
      href:"https://www.geeksforgeeks.org/user/rohitkumar1028c/",

    },
    {
      id: 5,
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      name:"Resume",
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 6,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      name:"Mail",
      href: "mailto:rohitkumar1028c@gmail.com",
    },
    
  ];

  return (
    <div className=" flex justify-center flex-row bg-gradient-to-b to-black from-gray-800 ">
      <div className=" my-8 w-8/12 flex justify-center">
      <ul className="grid grid-cols-2 sm:w-2/12 flex-row justify-center  md:flex md:flex-col md:top-[35%] md:left-0 md:fixed">
        {links.map(({ id, child, href, style, download,name }) => (
          <li
            key={id}
            className={
              "flex justify-between  w-auto mx-1 p-4 items-center md:w-40 h-14 px-4 md:ml-[-100px] md:hover:ml-[-10px] md:hover:rounded-md md:duration-300 sm:bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center sm:w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            ><div className="hidden sm:block">{name}</div>
             {child}
            </a>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default SocialLinks;
