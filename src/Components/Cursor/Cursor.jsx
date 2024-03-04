import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


function Cursor() {
    const [mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })

    useEffect(() =>{
        const mouseMoveHandler = (e) =>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }

        window.addEventListener('mousemove',mouseMoveHandler)

        return () =>{
            window.removeEventListener('mousemove',mouseMoveHandler)
        }
    },[])

    const variants = {
        default:{
            x:mousePosition.x,
            y:mousePosition.y
        }

    }

    return (
        <>
            <motion.div variants={variants} animate="default" className='hidden md:block w-6 h-6 rounded-full fixed top-0 left-0 z-50 border border-1  bg-transparent'></motion.div>
        </>

    )
}

export default Cursor