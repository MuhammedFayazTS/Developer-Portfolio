import React, { useRef, useState } from 'react'
import icon from '../../assets/react.svg'
import { motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion'
import logo from '../../assets/Images/code.png'
import { navList } from '../../Content/data'



const listVariants = {
  initial: {
    x: -150,
    y: -150,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50
    }
  }
}

const navVariant = {
  visible: {
    y: 0,
    transition: {
      type: "spring"
    }
  },
  hidden: {
    y: -100,
    transition: {
      type: "spring"
    }
  }
}

const linkVariant = {
  hide: {
    opacity: 0,
    scaleX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50
    }
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50
    }
  }
}



function NavBar() {
  const { scrollY } = useScroll()
  const listRef = useRef(null)
  const isInView = useInView(listRef)

  const [hidden, setHidden] = useState(false)


  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      <motion.nav
        variants={navVariant} animate={hidden ? "hidden" : "visible"}
        className={`flex items-center justify-between h-[5rem] sticky top-0 z-50`}>
        {/* logo */}
        <motion.span layoutId='logoIcon' className='flex items-center text-xl font-semibold gap-2'>
          <motion.img  className='w-8 h-8 aspect-square' src={logo} alt="logo.png" />
          <span>Dev</span>
        </motion.span>

        {/* links */}
        <motion.ul ref={listRef} initial={"initial"} animate={isInView && "visible"} transition={{ type: 'spring', staggerChildren: 0.1 }} className='hidden md:flex items-center gap-5'>
          {
            navList.map((link) => (
              <motion.li key={link.text} variants={listVariants} className='cursor-pointer'>
                <motion.a initial="hide" whileHover={"show"} href={link.to} className='relative text-lg'>
                  {link.text}
                  <motion.span variants={linkVariant} className='absolute -bottom-1 left-0 right-0 w-full h-0.5 rounded origin-left bg-white border border-1'></motion.span>
                </motion.a>
              </motion.li>
            ))
          }
        </motion.ul>

        {/* end button */}
        <a href={icon} download={true} className='hidden md:block outline outline-1 px-3 py-1 rounded-md hover:bg-white hover:text-black'>Resume</a>

      </motion.nav>
    </>
  )
}

export default NavBar