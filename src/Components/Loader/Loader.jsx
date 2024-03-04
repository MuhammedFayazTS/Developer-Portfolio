import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

function Loader() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            className='relative w-full h-screen flex justify-center items-center bg-zinc-950 text-fuchsia-600'
        >
            {/* <motion.img
                variants={item}
                className='w-96 h-96'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlV0Yp-T-FXWrr-yzplklqtt3VqFp1HpFFIrZfHkewQ&s"
                alt=""
            /> */}
            <MacTerminal />
        </motion.div>
    );
}

export default Loader;


function MacTerminal() {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedDate = days[date.getDay()] + ' ' + date.getDate() + ' ' +  ' ' + date.getHours() + ' ' + date.getMinutes() + ' ' + date.getSeconds() 
    return (
        <>
            <motion.div variants={item} className="w-11/12 md:w-1/2 mx-auto">
                <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                    <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                        <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                        </div>
                        <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                        </div>
                        <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                        </div>
                        <div className="mx-auto pr-16" id="terminaltitle">
                            <p className="text-center text-sm">Terminal</p>
                        </div>

                    </div>
                    <div className="pl-1 pt-1 h-auto  text-green-400 font-mono text-xs bg-black" id="console">
                        <p className="pb-1 text-white">Last login: {formattedDate} Wed Sep 25 09:11:04 on ttys002</p>
                        <p className="pb-1 ">$ npm install</p>
                        <p className="pb-1 text-yellow-200">installing dependencies</p>
                        <div className="pb-1">
                            <Typewriter
                                options={{
                                    strings: ['$ npm run dev'],
                                    autoStart: true,
                                    loop: false,
                                    deleteSpeed: 2000
                                }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}



