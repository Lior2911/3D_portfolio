import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        The course's duration, which lasted approximately 800 academic hours,
        indicates that you have received extensive training in various aspects
        of web development. This training likely covered topics such as HTML,
        CSS, JavaScript, server-side programming, database design and
        management, and more. Additionally, the course's open laboratory and
        dormitory setting (24/7) suggests that you had ample opportunities to
        practice and apply what you learned in a real-world setting. This type
        of immersive learning environment can be incredibly beneficial for those
        seeking to develop their skills quickly and thoroughly.
        
      </motion.p>
<br />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my Stuck include the next technology :</p>
       
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
     
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech , "") ;
