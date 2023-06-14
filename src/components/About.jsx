import React from "react";
import Parallax from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Parallax
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Parallax>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-4 border p-2">
        <div className="flex justify-between">
          {/* Personal Info title*/}
          
          <div className="flex flex-col">
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Personal Info</p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Name: <span className="text-white">Siddharth Singh</span></p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Age: <span className="text-white">21</span></p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Location: <span className="text-white">India</span></p>


            </div>
            {/* give a link to your resume here */}
            <a href="https://drive.google.com/file/d/1Z3Z3Q4Z3Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className="bg-tertiary text-white px-4 py-2 rounded-md">Resume</button>
            </a>
            {/* open A new page to show your resume */}

          </div>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
