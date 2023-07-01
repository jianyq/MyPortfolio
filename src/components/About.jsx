import React from "react";
import Parallax from "react-parallax-tilt";
import { motion } from "framer-motion";
import Pdf from '../Documents/Resume.pdf';

   
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
  const iframeContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
    height: 0,
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };
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
        I am a CS+Math student at UIUC. With extensive experience in algorithm competitions, a familiarity with full-stack technology, and a thirst for knowledge, I'm constantly pushing boundaries to shape the future of AI. Let's work together to bring your ideas to life!
      </motion.p>
      

      <div className="mt-4 border p-2">
        <div className="flex justify-between">
          {/* Personal Info title*/}
          
          <div className="flex flex-col">
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Personal Info</p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Name: <span className="text-white">Yuqing Jian</span></p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Email: <span className="text-white">yuqingj2@illinois.edu</span></p>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">Phone: <span className="text-white">217-721-0439</span></p>
            


            </div>
            {/* give a link to your resume here */}
            <a href={Pdf} target="_blank" rel="noreferrer">
              <button className="bg-tertiary text-white px-4 py-2 rounded-md hover:bg-white hover:text-tertiary">My resume</button>
            </a>

          </div>
      </div>
      <div style={iframeContainerStyle}>
        <iframe 
          src="https://jianyq-resumebot.hf.space"
          title="Resumebot"
          allowFullScreen
          style={iframeStyle}
        ></iframe>
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
