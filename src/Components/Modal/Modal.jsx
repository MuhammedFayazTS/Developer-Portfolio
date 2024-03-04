import { RiCloseLine, RiCodeLine, RiGlobalLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const variants = {
    initial: {
        scale: 0.5,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: 0.5,
        opacity: 0,
        y: -300
    },
}

function Modal({ data }) {
    const [open, setOpen] = useState(false);

    // Effect to toggle overflow:hidden on the body when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [open]);

    return (
        <>
            {createPortal(
                <AnimatePresence>
                    {open && (
                        <motion.div
                            key={'modal'}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center  items-center  z-10 bg-black/90 text-white"
                        >
                            <motion.div variants={variants} className="w-11/12 md:w-2/3 h-fit md:h-4/6 rounded-md bg-neutral-950 outline outline-1 outline-neutral-800 grid md:grid-cols-2 relative">

                                <div className=" flex flex-col md:justify-between  items-center gap-y-5 md:gap-y-0 md:p-6">
                                    <video className='w-full  aspect-video rounded-md' autoPlay loop muted>
                                        <source src={data.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <h3 className="text-3xl md:text-4xl mt-6 font-semibold">{data.title}</h3>

                                    <motion.div className="w-full flex justify-center rounded-lg gap-x-5 my-2 md:my-5 bg-neutral-900 p-2">
                                        {data?.technologies?.map((technologie, index) => (
                                            <img key={index} src={technologie} alt={technologie} className='w-7 md:w-10 h-7 md:h-10' />
                                        ))}
                                    </motion.div>

                                </div>

                                <div className="pb-8 px-2 md:p-10 flex flex-col justify-between md:relative">

                                    <button onClick={(e) => setOpen(false)} className='absolute top-2 right-3 p-1 md:p-0 bg-black md:bg-transparent border-0 shadow-none rounded-full duration-500 ease-in-out  hover:bg-purple-500' >
                                        <RiCloseLine />
                                    </button>

                                    <p className='md:text-justify text-lg md:text-xl my-2 text-gray-400'>{data.longDesc || data.desc}</p>
                                    <div className="flex justify-center gap-x-5">
                                        {
                                            data.live &&
                                            <a href={data.live} target='blank' className="border-none px-8 py-2 rounded-md flex justify-center items-center gap-x-2 outline outline-1 outline-gray-700 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
                                                <RiGlobalLine />
                                                Live
                                            </a>
                                        }
                                        {
                                            data.code &&
                                            <a href={data.code} target='blank' className="border-none px-8 py-2 rounded-md flex justify-center items-center gap-x-2 outline outline-1 outline-gray-700 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
                                                <RiCodeLine />
                                                Code
                                            </a>
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
            <motion.button
                whileHover={{scale:1.1}}
                onClick={(e) => setOpen(prev => !prev)}
                className='w-28 py-1 flex justify-center items-center rounded text-sm md:text-md text-gray-200  outline outline-1 outline-gray-700 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600' >Learn More</motion.button>
        </>
    );
}

export default Modal;
