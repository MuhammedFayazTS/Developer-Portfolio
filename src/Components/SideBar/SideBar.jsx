import  { useState } from 'react'
import ToggleButton from './ToggleButton' 
import Links from './Links'
import { motion } from 'framer-motion'

function Sidebar() {
    const [open,setOpen] = useState(false)

    const variants = {
        open:{
            clipPath:"circle(1200px at calc(100% - 50px) 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            clipPath:"circle(24px at calc(100% - 50px) 40px)",
            transition:{
                type:"spring",
                stiffness:500,
                damping:50
            }
        }
    }

  return (
    <motion.div className='w-fit flex md:hidden justify-center items-center z-40 '  animate={open?"open":"closed"} >
        <motion.div className="fixed top-0 right-0 bottom-0 w-full h-screen z-40 backdrop-blur-xl" variants={variants} >
            <Links setOpen={setOpen} />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar