import React, { useRef } from 'react'
import { skills } from '../../Content/data'
import { motion, useInView } from 'framer-motion'


const variants = {
    initial: {
        x: -150,
        y: 150,
        opacity: 0
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
    },
    hover: {
        scale: 1.3,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 50
        }
    }
}



function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <section className='md:snap-center w-full min-h-screen pt-[5rem] flex flex-col justify-start items-center'>
            <motion.h2 className="relative text-5xl text-center mb-16 ">My Skills
                <motion.span className="absolute w-1/2 h-1 -bottom-4 left-1/2 -translate-x-1/2 bg-white"></motion.span>
            </motion.h2>
            <motion.div ref={ref} initial="initial" animate={isInView && "visible"} transition={{ type: 'spring', staggerChildren: 0.1 }}
                className="w-full h-fit px-[10%] flex flex-wrap  justify-center items-center gap-10">
                {
                    skills.map((skill, i) => (
                        <SkillCard skill={skill} key={i} />
                    ))
                }
            </motion.div>
        </section>
    )
}

function SkillCard({ skill }) {
    return (
        <motion.div variants={variants}>
            <motion.div whileHover={"hover"} variants={variants}  className='w-20 md:w-24  h-20 md:h-24 p-5 rounded-xl outline outline-1 outline-zinc-800 hover:outline-purple-600 hover:shadow-lg hover:shadow-indigo-500/50 '>
                <motion.img className='w-full h-full ' src={skill} alt={skill} />
            </motion.div>
        </motion.div>
    )
}

export default Skills