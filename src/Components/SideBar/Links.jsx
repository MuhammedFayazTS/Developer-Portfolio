import { motion } from "framer-motion"
import { navList } from "../../Content/data"

const items = [
    "Home",
    "Services",
    "Contact"
]


function Links({ setOpen }) {

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.5
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    }

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1
        },
        closed: {
            y: 50,
            opacity: 0
        }
    }

    return (
        <motion.div className="absolute w-full h-full flex flex-col items-center justify-center gap-y-5" variants={variants}>
            {
                navList.map(link => (
                    <motion.a href={link.to} onClick={() => setOpen(prev => !prev)} key={link.text} variants={itemVariants}
                        whileTap={{ scale: 1.1 }} className="text-2xl"
                    >{link.text}</motion.a>
                ))

            }
            <motion.a href='#' download={true} variants={itemVariants} className='outline outline-1 px-3 py-1 rounded-md hover:bg-white hover:text-black'>Resume</motion.a>
        </motion.div >
    )
}

export default Links