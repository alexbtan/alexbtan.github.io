import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import {Navbar,} from '../components';

const Hero = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <section className="relative w-full h-screen mx-auto">
      <motion.div>
        <p className={styles.heroHeadText}>ALEXANDER TAN</p>
        <h2 className={styles.heroSubText}>SOFTWARE ENGINEER</h2>
        <ul className="list-none hidden sm:flex flex-col gap-10 py-10 px-10">
          {navLinks.map((link) => 
          (
            <li
            key={link.id}
            className={`${
              active == link.title
                ? "text-black"
                : "text-[#66605F]"
            } hover:text-black text-[18px]
            font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </motion.div>
    </section>
  )
}

export default SectionWrapper(Hero, "")