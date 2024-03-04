import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { education } from '../../Content/data'
const isMobile = window.innerWidth < 730

function Education() {
    const ref = useRef(null)


    return (
        <>
            <motion.section ref={ref} className='md:snap-center pt-[5rem]'>

                {/* heading */}
                <div className='w-full flex justify-center'>
                    <motion.h2 className="relative text-5xl text-center w-fit mb-16 ">Education
                        <motion.span className="absolute w-1/2 h-1 -bottom-4 left-1/2 -translate-x-1/2 bg-white"></motion.span>
                    </motion.h2>
                </div>

                {/* <!-- Timeline --> */}
                <div className="md:container  mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden py-16 md:p-10 h-full">
                        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="border-2-2 origin-top absolute border-opacity-20 border-gray-300 h-full border left-6 md:left-1/2" ></motion.div>
                        {
                            education?.map((item, i) => (
                                <TimelineItem key={i} order={i % 2 == 0 ? "right" : "left"} number={i + 1} title={item.title} description={item.description} />
                            ))
                        }
                    </div>
                </div>
            </motion.section>
        </>

    )
}


const TimelineItem = ({ order, number, title, description }) => {

    const flexDirection = (order === "left") ? (isMobile ? "flex-row" : "flex-row-reverse") : "flex-row";
    const ref = useRef()
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                staggerChildren: 0.3
            }
        }
    }

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" whileInView="visible" className={`mb-8 flex  ${flexDirection} justify-between items-center w-full right-timeline`}>
            <motion.div className="order-1 w-fit md:w-5/12"></motion.div>
            <motion.div className="z-20 flex items-center order-1 bg-neutral-800 outline outline-[.1px] shadow-xl w-8 h-8 rounded-full">
                <h3 className="mx-auto font-semibold text-lg ">{number}</h3>
            </motion.div>
            <motion.div className="order-1 bg-neutral-900/30 backdrop-blur-2xl outline outline-[.1px] outline-neutral-700 rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold  text-xl">{title}</h3>
                <p className="text-sm leading-snug tracking-wide  text-opacity-100">{description}</p>
            </motion.div>
        </motion.div>
    );
};

export default Education