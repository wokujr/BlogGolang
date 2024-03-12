import {motion} from "framer-motion";

export default function About() {
    return (
        <motion.section className="mb-28 max-2-[45rem] leading-8 sm:mb-40"
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        id="me">
            <h2 className="text-center text-3xl"> About me</h2>
            <motion.p className="px-4"
                      initial={{opacity: 0, y: 100}}
                      animate={{opacity: 1, y: 0}}>
                <div className="mx-auto lg:px-64">
                    As an individual who initially didn't have a background in programming, I embarked on a journey into
                    the realm of software
                    development when a close friend imparted a timeless piece of wisdom: "It's never too late to learn."
                    With this encouragement
                    echoing in my mind, I delved into the world of C++, a language renowned for its versatility and
                    power.
                    <br/>
                    From the moment I typed my first lines of code, I was captivated by the elegant logic and limitless
                    possibilities that programming offered. As I honed my skills, I found myself drawn particularly to
                    the
                    intricacies of C++, mastering its syntax and exploring its depths to unlock its full potential.
                    <br/>
                    I have been work in japan for over 5 years.
                    passed japanese language proficiency test N2 and I'm currently studying for N1.
                </div>
                <h2 className="text-center text-3xl mt-24 mb-2">Projects</h2>
                <div className="px-8 mt-8 justify-centerflex flex-col items-center lg:flex-row lg:justify-between lg:px-20">
                    <div className="flex flex-wrap justify-center lg:justify-around">
                        <div className="flex flex-row items-center justify-center">
                            <div className="lg:w-80 lg:h-80 sm:w-48 sm:h-48 flex justify-center items-center rounded-lg mb-4 focus:scale-110 hover:scale-110 hover:bg-gray-600 active:scale-105 transition">
                                <a className="text-black hover:text-cyan-500"
                                   href="https://github.com/wokujr?tab=repositories">
                                    <img className="lg:w-[90%] sm:w-[100%] mx-auto" src="/Github.png" alt=""/>
                                </a>
                            </div>
                            <div className="lg:w-80 lg:h-80 sm:w-48 sm:h-48 mx-4 flex justify-center items-center rounded-lg focus:scale-110 hover:scale-110 hover:bg-gray-600 active:scale-105 transition">
                                <a className="text-black hover:text-cyan-500" href="https://www.artstation.com/sysum">
                                    <img className="lg:w-[90%] sm:w-[100%] mx-auto" src="/environtment.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.p>
        </motion.section>
    );
}
