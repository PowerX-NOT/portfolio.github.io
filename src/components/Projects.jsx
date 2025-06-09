import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[300px] xs:h-[350px] md:h-[420px] cursor-pointer card-shadow hover:shadow-2xl`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[2rem] xs:pr-[3rem] md:pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[150px] xs:w-[180px] md:w-[200px] h-[30px] 
        whitespace-nowrap text-[16px] xs:text-[20px] sm:text-[27px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-4 xs:p-6 md:p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-2 xs:m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold text-[20px] xs:text-[24px] sm:text-[32px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[0.5rem] xs:-mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver text-[10px] xs:text-[12px] sm:text-[14px] 
              max-w-3xl leading-[16px] xs:leading-[18px] sm:leading-[24px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              text-[12px] xs:text-[14px] sm:text-[16px] text-timberWolf 
              font-bold font-beckman items-center py-3 xs:py-4 sm:py-5 pl-2 pr-2 xs:pr-3 
              whitespace-nowrap gap-1 w-[110px] xs:w-[125px] sm:w-[138px] h-[40px] xs:h-[46px] sm:h-[50px] 
              rounded-[10px] glassmorphism 
              mt-[12px] xs:mt-[16px] sm:mt-[22px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon w-[26px] h-[26px] xs:w-[30px] xs:h-[30px] sm:w-[34px] sm:h-[34px] 
                  object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[16px] xs:text-[18px] max-w-3xl leading-[26px] xs:leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[50vh] xs:min-h-[60vh] md:min-h-[70vh] gap-3 xs:gap-4 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');