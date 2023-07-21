import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
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
      </div>
  )
}

export default Navbar