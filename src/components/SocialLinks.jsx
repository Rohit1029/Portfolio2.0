import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rohit-kumar-4b4259228/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rohit1029",
    },
    
    {
      id: 3,
      child: (
        <>
          Codechef <SiCodechef size={30} />
        </>
      ),
      href: "https://www.codechef.com/users/rohit_780",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rohitkumar1028c@gmail.com",
    },
    
  ];

  return (
    <div className=" flex justify-center flex-row bg-gradient-to-b to-black from-gray-800 ">
      <div className=" my-8 w-8/12 flex justify-center">
      <ul className="grid grid-cols-2 w-8/12 flex-row justify-center  md:flex md:flex-col md:top-[35%] md:left-0 md:fixed">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between  w-auto mx-1 p-4 items-center md:w-40 h-14 px-4 md:ml-[-100px] md:hover:ml-[-10px] md:hover:rounded-md md:duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
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
