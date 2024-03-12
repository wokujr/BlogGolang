"use client"

import {motion} from "framer-motion";
import {AboutLinks} from "./AboutLink.tsx";
import {Link} from "react-router-dom";

export default function AboutMeHeader() {

    return (
        <header className="z-[999] relative">
            <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[3.5rem] w-full rounded-none border border-cyan-300 border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/ backdrop-blur- sm:top-6 sm:h-
            sm:w-[36rem] sm:rounded-full"
                        initial={{y: -100, x:"-50%", opacity: 0}}
                        animate={{y:0, x:"-50%", opacity: 1}}
            >
            </motion.div>
            <nav className="flex fixed top-[0.15rem] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 text-black">
                    <ul className={`flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5`}>
                        {AboutLinks.map(link=> (
                            <motion.li className={`h-3/4 flex items-center justify-center`} key={link.hash}
                                       initial={{y: -100, opacity: 0}}
                                       animate={{y:0, opacity: 1}}>
                                <Link className={`mx-auto flex w-full items-center justify-center px-3 py-3 text-black hover:text-cyan-500 transition`} to={link.hash}> {link.name}</Link>
                            </motion.li>
                        ))}
                    </ul>
            </nav>
        </header>
    );
}
