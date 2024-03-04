import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import bg from '../../assets/Videos/Bg.webm'

const item = {
    hidden:{
        opacity: 0,
        scale:0.6,
    },
    show:{
        opacity: 1,
        scale: 1,
        transition:{
            type:"spring",
            stiffness:200,
            damping:50
        }
    },
    exit:{
        opacity: 0,
        scale:0.6,
        transition:{
            type:"spring",
            stiffness:200,
            damping:50
        }
    }
};

function Bg() {
    const ref = useRef(null)
    const inView = useInView(ref)
    return (
        <>
            {/* animated bg gardient */}
            <motion.div ref={ref}
            initial="hidden" animate={inView && "show"} exit="exit"
            className="absolute top-0 left-0 w-full h-screen md:h-[calc(100vh+5rem)] opacity-20  z-0 overflow-hidden bg-gray-900/10">
                <motion.video variants={item} autoPlay muted loop   className='w-full h-full filter blur-[1px]  object-cover' >
                    <source src={bg} />
                </motion.video>
            </motion.div>
            {/* animated bg gardient  end*/}

        </>
    )
}

export default Bg