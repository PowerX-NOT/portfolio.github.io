import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'; // Import useState and useEffect for the typing effect
import { styles } from '../styles';
import { bwmap, worldmap, githubLogo, linkedinLogo, instaLogo } from '../assets';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true); // For controlling the cursor visibility
  const fullText = "And I'm debugging my way to something massive.";

  useEffect(() => {
    const typingTimer = setInterval(() => {
      setText((prev) => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          clearInterval(typingTimer);
          return prev;
        }
      });
    }, 100); // Adjust speed by changing the interval time (in ms)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 500); // Adjust blinking speed

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[120px] xs:top-[140px]
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="flex-1 max-w-full">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[40px] xs:text-[50px] font-mova
                font-extrabold uppercase">
                Pugal!
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack max-w-full break-words`}>
              {text}
              {showCursor && <span>|</span>} {/* Display cursor if showCursor is true */}
            </p>
            {/* Social links */}
            <div className="flex items-center mt-4 space-x-3 xs:space-x-4">
              <a
                href="https://github.com/PowerX-NOT"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110">
                <img src={githubLogo} alt="GitHub" className="w-10 h-10 xs:w-12 xs:h-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/pugal-g-29b50329b/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110">
                <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10 xs:w-12 xs:h-12" />
              </a>
              <a
                href="https://www.instagram.com/__.pugal/profilecard/?igsh=czR6cGV6OXB5NTZu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110">
                <img src={instaLogo} alt="Instagram" className="w-9 h-9 xs:w-11 xs:h-11" />
              </a>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-20 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Spline 3D Viewer */}
        <div
          className="absolute top-0 right-0 h-screen items-center justify-center z-10 hidden lg:flex"
          style={{ width: '60vw' }}
        >
          <spline-viewer
            class="robo"
            url="https://prod.spline.design/jvZuwSW2U4O7m8yl/scene.splinecode"
          ></spline-viewer>
        </div>
      </section>
    </>
  );
};

export default Hero;