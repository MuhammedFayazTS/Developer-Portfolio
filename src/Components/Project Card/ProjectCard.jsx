import { RiReactjsLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import React from 'react'
import Modal from '../Modal/Modal'

const variants = {
    initial: {
        filter:'grayscale(1)'
    },
    hover: {
        filter:'grayscale(0)',
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
            <motion.section initial={{scale:0.5}} whileInView={{scale:1}} transition={{type:'spring',damping:40,stiffness:100}} className='md:snap-center h-fit md:h-screen w-full  flex justify-center items-center pt-[15%] '>
                <motion.div initial="initial" whileHover={"hover"} className="w-full md:w-[450px] aspect-square  rounded-lg p-2 flex flex-col items-center outline outline-1 outline-white/20 " >
                    <motion.video variants={variants} className='w-full h-3/5 object-cover rounded-md' autoPlay loop muted>
                        <source src={data.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </motion.video>
                    <h3 className="text-2xl mt-6 font-semibold">{data.title}</h3>
                    {/* <div className="flex gap-x-3 my-5 text-white/15">
                        {data?.technologies?.map((technologie,index) => (
                            <img key={index} src={technologie} alt={technologie} className='w-8 h-8' />
                        ))}
                    </div> */}
                    <p className='text-center text-sm text-neutral-400 my-2'>{data.desc}</p>
                    {/* <a href="#" className='w-28 py-1 flex justify-center items-center rounded outline outline-1 outline-purple-400 text-purple-400'>View</a> */}
                    <Modal data={data} />
                </motion.div>
            </motion.section>
        </>
    )
}

export default ProjectCard