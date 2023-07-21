import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({service, index}) => 
{
  return  (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card"
      >
        <div
          options={{
            max: 2,
            scale: 1,
            speed: 450
          }}
          className="bg-black rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={service.icon} alt={service.title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
          <ul className="mt-5 list-disc ml-5 space-y-2">
          {service.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants = {fadeIn("", ", 0.1, 1")}
        className="mt-4 text-black text-[17px]
        max-w-3xl leading-[30px]"
      >
        I'm Alex, an enthusiastic programmer with a passion for desiging and creating projects,
        who is always looking for new opportunities to improve my skills.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")