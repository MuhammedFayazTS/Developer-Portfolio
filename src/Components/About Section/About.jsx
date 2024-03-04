import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { about, points } from '../../Content/data';
import MyPic from '../../assets/Images/ME.webp'

const pointVariants = {
    initial: {
        x: -150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    }
}

const textVariants = {
    initial: {
        y: 150,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    }
}

function About() {

    const ref = useRef(null)
    const pointRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const isInViewText = useInView(ref)
    const isInViewPoints = useInView(pointRef)

    return (
        <>
            <motion.section id='about' className='min-h-screen flex flex-col justify-center items-center py-5 relative bg-black'>

                {/* <motion.h2 style={{ opacity }} className="text-5xl mb-16 relative">
                    About
                    <span className="absolute w-1/2 h-1 -bottom-3 left-1/2 -translate-x-1/2 bg-white"></span>
                </motion.h2> */}



                <div className='min-h-screen md:snap-center py-24 md:py-0 grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-0 place-items-center my-16 md:my-0'>
                    <motion.div initial={"initial"} animate={isInViewText && "visible"} viewport={{ once: true }} transition={{ staggerChildren: 0.1 }} className='flex flex-col justify-center items-center gap-2'>
                        <motion.h2 ref={ref} variants={textVariants} style={{ opacity }} className="text-5xl font-semibold">Who am I ?</motion.h2>
                        
                        {/* about me */}
                        <motion.p variants={textVariants} style={{ opacity }} className='text-lg md:text-2xl  text-center text-gray-300 backdrop-blur-md'>
                            {about}
                        </motion.p>

                        <motion.a variants={textVariants} href='#contact' className="btn2 mt-12 px-10 py-5 relative border hover:border-purple-800 uppercase font-semibold tracking-wider leading-none overflow-hidden  hover:text-whi" type="button">
                            <span className="absolute inset-0 bg-gradient-to-tl from-purple-800 via-fuchsia-700 to-purple-800"></span>
                            <span className="absolute inset-0 flex justify-center items-center font-bold">
                                Lets Talk
                            </span>
                            Lets Talk
                        </motion.a>

                    </motion.div>
                    <motion.img loading='lazy' initial={{ y: 250, scale: 0.5, opacity: 0 }} whileInView={{ y: 0, scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', damping: 50, stiffness: 200 }} className='w-2/3 md:w-1/2 object-cover object-bottom aspect-square rounded-lg' src={MyPic} alt="" />
                </div>



                <motion.div initial={"initial"} animate={isInViewPoints && "animate"} viewport={{ once: true }} transition={{ type: 'spring', staggerChildren: 0.3 }}
                    className="md:min-h-screen md:snap-center flex md:justify-center items-center py-16 md:py-0  my-16 md:my-0 ">
                    <div ref={pointRef} className='flex flex-wrap gap-y-5' >
                        {
                            points.map(point=>(
                                <Points key={point.title} data={point} />
                            ))
                        }
                    </div>
                </motion.div>

            </motion.section>
        </>

    )
}


function Points({data}) {
    return (
        <motion.div variants={pointVariants} className='w-1/2 md:w-1/4 flex flex-wrap flex-col items-center gap-2 p-1'>
            <motion.div className='w-16 md:w-20 h-16 md:h-20  flex   justify-center items-center rounded-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-300 via-purple-600 to-indigo-600 '>
                <img className='w-1/2 h-1/2 ' src={data.icon} alt={data.title} />
            </motion.div>
            <h6 className="text-3xl font-semibold">{data.title}</h6>
            <p className="text-md text-center p-1  text-neutral-400">{data.desc}</p>
        </motion.div>

    )
}

export default About