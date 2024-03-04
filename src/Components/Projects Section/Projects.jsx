import React, { useRef } from 'react'
import ProjectCard from '../Project Card/ProjectCard'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { projects } from '../../Content/data'

const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping:30,
            staggerChildren: 0.1
        }
    }
}

function Projects() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })


    return (
        <>
            <motion.section id='portfolio' variants={variants} initial="hidden" whileInView="visible" ref={ref} className='min-h-screen flex flex-col md:flex-row items-center justify-center pt-[6rem] md:pt-6 '>
                {/* headings */}
                <motion.div className='h-fit flex place-self-start flex-col ml-1 md:ml-0 md:mr-[10rem] md:sticky md:left-0 md:top-1/4'>
                    <h2 className="text-2xl text-purple-500">✨Portfolio</h2>
                    <h1 className="text-5xl md:text-7xl md:leading-[4.8rem] font-bold">Create at the speed of thought.</h1>
                    <p className='mt-8'>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
                </motion.div>
                {/* projects display section */}
                <motion.main  className='snap-y snap-proximity flex flex-col items-center'>
                    {/* card */}
                    {
                        projects.map((project,i)=>{
                            return <ProjectCard key={i} data={project} />
                        })
                    }
                </motion.main>
                {/* progress */}
                <motion.div className="w-1 place-self-start h-[50vh] ml-[6rem] rounded-lg hidden md:block md:sticky md:left-0 md:top-1/3 bg-neutral-900">
                    <motion.div style={{ scaleY }} className="w-full h-full origin-top outline outline-1 rounded-lg outline-purple-700 bg-gradient-to-b from-purple-800 via-fuchsia-700 to-purple-800">
                    </motion.div>
                </motion.div>


            </motion.section>
        </>

    )
}

export default Projects