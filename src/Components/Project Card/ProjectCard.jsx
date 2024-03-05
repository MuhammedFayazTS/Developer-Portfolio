import { RiReactjsLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import React from 'react'
import Modal from '../Modal/Modal'

const variants = {
    initial: {
        filter: 'grayscale(1)'
    },
    hover: {
        filter: 'grayscale(0)',
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 50
        }
    }
}

function ProjectCard({ data }) {
    return (
        <>
            <motion.section initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', damping: 40, stiffness: 100 }} className='md:snap-center h-fit md:h-screen w-full  flex justify-center items-center pt-[15%] '>
                <motion.div initial="initial" whileHover={"hover"} className="w-full md:w-[450px] aspect-square  rounded-lg px-2 pb-5 md:p-2 flex flex-col items-center outline outline-1 outline-white/20 " >
                    <motion.video variants={variants} className='w-full h-3/5 object-cover rounded-md' autoPlay loop muted>
                        <source src={data.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </motion.video>
                    <h3 className="text-2xl mt-6 font-semibold">{data.title}</h3>
                    <p className='text-center text-sm text-neutral-400 my-4'>{data.desc}</p>
                    <Modal data={data} />
                </motion.div>
            </motion.section>
        </>
    )
}

export default ProjectCard