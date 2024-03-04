import { RiGithubLine, RiLinkedinBoxLine, RiWhatsappLine } from '@remixicon/react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { socialLinks } from '../../Content/data'

const variants = {
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    },
    hidden: {
        x: -100,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50
        }
    }
}



function Socials() {
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <>
            <motion.section initial="hidden"
                transition={{ staggerChildren: 0.1 }} animate={hidden ? "hidden" : "visible"}
                className='fixed top-0 left-2 md:left-5 h-screen w-fit flex flex-col justify-end md:justify-center py-5 gap-5 z-10'>
                <motion.div variants={variants} className="w-[1.3rem] md:w-[2rem] h-[1.3rem] md:h-[2rem] flex justify-center items-center rounded-full ">
                    <motion.a whileHover={{scale:1.2}} transition={{type:'spring'}} target='blank' href={socialLinks.gitHub}>
                        <RiGithubLine size={28} className='text-neutral-700 hover:text-neutral-50' />
                    </motion.a>
                </motion.div>
                <motion.div variants={variants} className="w-[1.3rem] md:w-[2rem] h-[1.3rem] md:h-[2rem] flex justify-center items-center rounded-full ">
                    <motion.a whileHover={{scale:1.2}} transition={{type:'spring'}} target='blank' href={socialLinks.linkedin}>
                        <RiLinkedinBoxLine size={28} className='text-neutral-700 hover:text-blue-500' />
                    </motion.a>
                </motion.div>
                <motion.div variants={variants} className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] flex justify-center items-center rounded-full ">
                    <motion.a whileHover={{scale:1.2}} transition={{type:'spring'}} target='blank' href={socialLinks.whatsapp}>
                        <RiWhatsappLine size={28} className='text-neutral-700 hover:text-green-500' />
                    </motion.a>
                </motion.div>
            </motion.section>
        </>

    )
}

export default Socials