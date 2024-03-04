import React, { useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import ScrollLottie from '../../assets/Lottie/Scroll.json'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const textVariants = {
    initial:{
        y:150,
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 50
        }
    }
}

function HeroSection() {

    const textRef = useRef(null)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const scrollBtnOpacity = useTransform(scrollYProgress, [0, 0.01, 1], [1, 0, 0])



    return (
        <>
            <motion.section ref={ref} style={{ scale, opacity }} className='md:snap-center h-[calc(100vh-5rem)]  md:h-screen relative flex justify-center items-center gap-x-10 z-10 ubuntu'>



                <motion.div ref={textRef} initial="initial" animate={ "visible"} transition={{staggerChildren:0.2}}  className='w-fit h-fit flex flex-col justify-center items-start'>
                    <motion.p variants={textVariants} className="text-xl md:text-2xl mt-4">👋 Hi I am,</motion.p>
                    {/* name */}
                    <motion.h2 variants={textVariants} className="text-5xl md:text-7xl font-extrabold text-start max-w-md ">Muhammed Fayaz TS</motion.h2>
                    {/* designation */}
                    <motion.div variants={textVariants} className="text-xl md:text-3xl mt-4">
                        <Typewriter
                            options={{
                                strings: ['Front-End Developer', 'Back-End Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </motion.div>

                    {/* buttons */}
                    <motion.button variants={textVariants} className='bg-transparent  mt-4 py-2 px-4  rounded-md border'>Resume</motion.button>
                </motion.div>


                {/* scroll down animation */}
                <motion.a style={{ opacity: scrollBtnOpacity }} href='#about'>
                    <Player
                        autoplay
                        loop
                        src={ScrollLottie}
                        className='w-[4.5rem] h-[4.5rem] absolute bottom-6 left-1/2 -translate-x-1/2'
                    >
                    </Player>
                </motion.a>
            </motion.section>
        </>

    )
}

export default HeroSection