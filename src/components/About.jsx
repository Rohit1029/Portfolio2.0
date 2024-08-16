import React from "react";

const About = () => {
  return (
    <>
    <div
      name="about"
      className="  w-auto h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="w-8/12 max-w-full-lg p-4 mx-auto flex flex-col justify-center  h-full">
        <div className="pb-8 mt-40 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            About
          </p>
        </div>

        <p className="text-base sm:text-lg lg:text-xl mt-20">
        My journey in technology began with a curiosity for understanding how things work, which quickly evolved into a love for building dynamic and responsive web applications.
        <br/>
        <br/>
        I've honed my skills in front-end and back-end development, mastering a wide range of tools and technologies to create seamless user experiences. I thrive in environments where I can apply my creativity to solve complex problems, whether it's designing intuitive user interfaces, optimizing backend processes, or integrating new technologies.
        <br/>
        <br/>
        I have solved over 600+ Data Structures and Algorithms (DSA) problems, which has sharpened my problem-solving skills and honed my ability to write optimized and scalable code.
        <br/>
        <br/>
        My expertise extends beyond web development, encompassing a comprehensive understanding of key computer science disciplines, including Object-Oriented Programming (OOP), Computer Networks, Database Management Systems (DBMS), and Operating Systems. 
        <br/>
        <br/>

       Apart from coding I also Working with PR and Media team and an active and dedicated Volunteer at National Service Scheme (NSS),NIT Silchar.
        </p>

        <br />

        {/* <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p> */}
      </div>
    </div></>
    
  );
};

export default About;
