import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useState } from 'react';

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 cursor-pointer transition-transform hover:scale-110 text-center"
            key={technology.name}
            onMouseEnter={() => setHoveredTech(technology.name)}  // Set hovered tech on enter
            onMouseLeave={() => setHoveredTech(null)}  // Reset on leave
          >
            <BallCanvas icon={technology.icon} />
            {hoveredTech === technology.name && (  // Show name only when hovered
              <p className="mt-2 text-sm">{technology.name}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
