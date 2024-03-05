import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const item = {
    hidden: {
        opacity: 0,
        scale: 0.6,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    },
    exit: {
        opacity: 0,
        scale: 0.6,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    }
};

function Bg() {
    const ref = useRef(null)
    const inView = useInView(ref)
    return (
        <>
            {/* animated bg gardient */}
            {/* <motion.div ref={ref}
            initial="hidden" animate={inView && "show"} exit="exit"
            className="absolute top-0 left-0 w-full h-screen md:h-[calc(100vh+5rem)] opacity-20  z-0 overflow-hidden bg-gray-900/10">
            </motion.div> */}
            {/* animated bg gardient  end*/}

            <motion.div ref={ref} initial="hidden" animate={inView && "show"} exit="exit"
                className="absolute top-0 left-0 w-full h-screen md:h-[calc(100vh+5rem)] z-0 bg-black">
                <motion.div variants={item} className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></motion.div>
            </motion.div>

        </>
    )
}

export default Bg