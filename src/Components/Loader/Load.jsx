import React from 'react'

function Load() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            classNameName='relative w-full h-screen flex justify-center items-center bg-black text-fuchsia-600'
        >
            <motion.img
                variants={item}
                classNameName='w-96 h-96'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlV0Yp-T-FXWrr-yzplklqtt3VqFp1HpFFIrZfHkewQ&s"
                alt=""
            />
        </motion.div>
    )
}

export default Load