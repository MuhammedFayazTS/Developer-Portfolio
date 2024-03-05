import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
    exit: {
        opacity: 0,
        scale:0.8,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

function Loader() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [completed,setCompleted] = useState(false)
    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            ref={ref}
            className='relative w-full h-screen flex justify-center items-center overflow-hidden bg-zinc-950 text-fuchsia-600'
        >

            <div className='flex justify-center items-center gap-3'>
                <motion.svg  className={`w-16 stroke-purple-700 `} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    layoutId='logoIcon'
                        initial={{ pathLength: 0,y:0,opacity:0 }}
                        animate={isInView && { pathLength: 1,y:0,opacity:1 }} exit={{y:-300,opacity:0}}
                        transition={{ duration: 1 }}
                        onAnimationComplete={() => setCompleted(true)}
                        d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"></motion.path>
                </motion.svg>
                <motion.span
                initial={{opacity:0,x:-100,y:0}} animate={completed && {opacity:1,x:0,y:0}}  exit={{opacity:0,y:-100}}
                transition={{type:'spring',damping:20,stiffness:100}}
                className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-purple-900 to-violet-600'>
                    Developer
                </motion.span>
            </div>

            <motion.div
                className="w-1/2 absolute bottom-0 md:-bottom-24 text-[#ffffff09] whitespace-nowrap text-[30vh] md:text-[50vh] font-bold pointer-events-none"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                Web Developer
            </motion.div>

        </motion.div>
    );
}

export default Loader;




