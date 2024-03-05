import { motion } from "framer-motion"

function ToggleButton({ setOpen }) {
    return (
        <>
            <button className="w-12 h-12 rounded-full fixed top-4 right-4 z-40 border-none flex justify-center items-center " onClick={() => setOpen(prev => !prev)}>
                <svg width="30" height="30"  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle variants={{
                        closed: { opacity: 1, x: 0, scale: 1 },
                        open: { opacity: 0, x: 5, scale: 1.1 }
                    }} transition={{ type: 'spring' }} cx="8" cy="32" r="7" fill="#D9D9D9" />
                    <motion.circle variants={{
                        closed: { opacity: 1, y: 0, scale: 1 },
                        open: { opacity: 0, y: 5, scale: 1.1 }
                    }} transition={{ type: 'spring' }} cx="8" cy="8" r="7" fill="#D9D9D9" />
                    <motion.circle variants={{
                        closed: { opacity: 1, x: 0, scale: 1 },
                        open: { opacity: 0, x: -5, scale: 1.1 }
                    }} transition={{ type: 'spring' }} cx="32" cy="32" r="7" fill="#D9D9D9" />
                    <motion.circle variants={{
                        closed: { opacity: 1, y: 0, scale: 1 },
                        open: { opacity: 0, y: -5, scale: 1.1 }
                    }} transition={{ type: 'spring' }} cx="32" cy="8" r="7" fill="#D9D9D9" />
    
                    <motion.rect
                    variants={{
                        open: { opacity: 1 },
                        closed: { opacity: 0 }
                    }} transition={{type:'spring',duration:.4}}
                    x="3.02567" y="31.116" width="5.69315" height="39.7257" rx="2.84658" transform="rotate(-135 3.02567 31.116)" fill="#D9D9D9" />
                    <motion.rect
                    variants={{
                        open: { opacity: 1 },
                        closed: { opacity: 0 }
                    }} transition={{type:'spring',duration:.4}}
                    x="-1.16644" y="2.87102" width="5.70985" height="39.8422" rx="2.85493" transform="rotate(-45 -1.16644 2.87102)" fill="#D9D9D9" />
    
                </svg>
            </button>
        </>
    )
}

export default ToggleButton